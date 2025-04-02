import React, { useEffect, useState } from "react";
import FilterHorizontalIcon from "../components/icons/filter-horizontal-stroke-rounded";
import "../styles/products.css";
import Button from "../components/Button";
import { Dropdown, DropdownItem } from "../components/Dropdown";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

const Products = () => {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState([]);
  const [size, setSize] = useState([]);
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  const getProducts = async (param) => {
    try {
      const url = param || "http://localhost:3000/api/products";

      const res = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      setData(data);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
      console.log(data);

      if (
        data &&
        Array.isArray(data.products) &&
        availableCategories.length === 0
      ) {
        const categories = data.products
          .flatMap((product) => product.category || [])
          .filter((category, index, self) => self.indexOf(category) === index);

        setAvailableCategories(categories);
      }

      if (data && Array.isArray(data.products) && availableTags.length === 0) {
        const tags = data.products
          .flatMap((product) => product.tags || [])
          .filter((tags, index, self) => self.indexOf(tags) === index);

        setAvailableTags(tags);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetProducts = async (page = 1) => {
    const queryParams = new URLSearchParams();

    console.log("category", category);
    console.log("tags", tags);
    console.log("size", size);
    console.log("price", price);

    if (search) {
      queryParams.append("name", search);
    }
    if (category) {
      if (!category.includes("All")) {
        queryParams.append("category", category.join(","));
      }
    }
    if (tags.length) queryParams.append("tags", tags.join(","));
    if (size.length) queryParams.append("size", size.join(","));
    if (price.length) {
      const [minPrice, maxPrice] = getPriceRange(price);
      console.log(getPriceRange(price));
      if (minPrice !== null) queryParams.append("minPrice", minPrice);
      if (maxPrice !== null) queryParams.append("maxPrice", maxPrice);
    }

    queryParams.append("page", page);
    queryParams.append("limit", 10);
    console.log("queryParams", queryParams.toString());

    const url = `http://localhost:3000/api/products?${queryParams.toString()}`;

    getProducts(url);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    handleGetProducts();
  }, [category, tags, size, price]);

  const handleSizeChange = (size) => {
    setSize((prevSize = []) =>
      prevSize.includes(size)
        ? prevSize.filter((t) => t !== size)
        : [...prevSize, size]
    );
  };

  const handlePriceChange = (range, checked) => {
    if (checked) {
      setPrice(range);
    } else {
      setPrice("");
    }
  };

  const getPriceRange = (range) => {
    console.log("Range", range);
    switch (range) {
      case "Under €10":
        return [null, 10];
      case "€10 - €20":
        return [10, 20];
      case "€20 - €50":
        return [20, 50];
      case "€50 - €100":
        return [50, 100];
      case "€100 - €200":
        return [100, 200];
      case "Over €200":
        return [200, null];
      default:
        return [null, null];
    }
  };

  const handleTagsChange = (tag, checked) => {
    setTags((prevTags) => {
      if (checked) {
        return [...prevTags, tag];
      } else {
        return prevTags.filter((item) => item !== tag);
      }
    });
  };

  const handleCategoryChange = (category, checked) => {
    setCategory((prevCategory) => {
      if (checked) {
        if (category === "All") {
          return ["All"];
        }

        return prevCategory.includes("All")
          ? [category]
          : [...prevCategory, category];
      } else {
        const updatedCategories = prevCategory.filter(
          (item) => item !== category
        );

        return updatedCategories.length === 0 ? [] : updatedCategories;
      }
    });
  };

  const handleSearch = (value) => {
    console.log("search", value);
    setSearch(value);
  };

  const handleClear = () => {
    setCategory([]);
    setSize([]);
    setPrice("");
    setTags([]);
  };

  const handlePageChange = (newPage) => {
    console.log("newPage", newPage);
    if (newPage >= 1 && newPage <= totalPages) {
      handleGetProducts(newPage);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleGetProducts();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <div className="products">
      <div className="products-filter">
        <div className="products-filter-title">
          <FilterHorizontalIcon />
          Filter
        </div>
        <div className="products-filter-content">
          <div className="product-filter-items">
            <Dropdown title="Category">
              <DropdownItem
                text="All"
                onChange={(checked) => handleCategoryChange("All", checked)}
              />
              {availableCategories.map((category) => (
                <DropdownItem
                  key={category}
                  text={category}
                  checked={category.includes(category)}
                  onChange={(checked) =>
                    handleCategoryChange(category, checked)
                  }
                />
              ))}
            </Dropdown>
            <Dropdown title="Size">
              <DropdownItem
                text="XS"
                value={size.includes("XS")}
                onChange={(checked) => handleSizeChange("XS", checked)}
              />
              <DropdownItem
                text="S"
                value={size.includes("S")}
                onChange={(checked) => handleSizeChange("S", checked)}
              />
              <DropdownItem
                text="M"
                value={size.includes("M")}
                onChange={(checked) => handleSizeChange("M", checked)}
              />
              <DropdownItem
                text="L"
                onChange={(checked) => handleSizeChange("L", checked)}
              />
              <DropdownItem
                text="XL"
                value={size.includes("XL")}
                onChange={(checked) => handleSizeChange("XL", checked)}
              />
              <DropdownItem
                text="XXL"
                value={size.includes("XXL")}
                onChange={(checked) => handleSizeChange("XXL")}
              />
              <DropdownItem
                text="XXXL"
                value={size.includes("XXXL")}
                onChange={(checked) => handleSizeChange("XXXL")}
              />
            </Dropdown>
            <Dropdown title="Price">
              <DropdownItem
                text="Under €10"
                value={price.includes("Under €10")}
                onChange={(checked) => handlePriceChange("Under €10", checked)}
              />
              <DropdownItem
                text="€10 - €20"
                value={price.includes("€10 - €20")}
                onChange={(checked) => handlePriceChange("€10 - €20", checked)}
              />
              <DropdownItem
                text="€20 - €50"
                value={price.includes("€20 - €50")}
                onChange={(checked) => handlePriceChange("€20 - €50", checked)}
              />
              <DropdownItem
                text="€50 - €100"
                value={price.includes("€50 - €100")}
                onChange={(checked) => handlePriceChange("€50 - €100", checked)}
              />
              <DropdownItem
                text="€100 - €200"
                value={price.includes("€100 - €200")}
                onChange={(checked) =>
                  handlePriceChange("€100 - €200", checked)
                }
              />
              <DropdownItem
                text="Over €200"
                value={price.includes("Over €200")}
                onChange={(checked) => handlePriceChange("Over €200", checked)}
              />
            </Dropdown>

            <Dropdown title="Tags">
              {availableTags.map((tags) => (
                <DropdownItem
                  key={tags}
                  text={tags}
                  checked={tags.includes(tags)}
                  onChange={(checked) => handleTagsChange(tags, checked)}
                />
              ))}
            </Dropdown>
          </div>
          <Button text={"Clear All"} variant={"danger"} onClick={handleClear} />
        </div>
      </div>
      <div className="products-list">
        <div className="products-list-header">
          {data && (
            <p>
              Showing <span>{data.totalProducts} Results</span>
            </p>
          )}
          <SearchBar value={search} onChange={handleSearch} />
        </div>
        <div className="product-list-container">
          <div className="products-list-content">
            {data &&
              data.products.map((product) => (
                <ProductCard
                  key={product._id}
                  text={product.name}
                  price={product.price}
                  rate={product.rate}
                  imgUrl={"https://placehold.co/50"}
                />
              ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
