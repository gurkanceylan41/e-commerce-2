import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProduct, getProducts } from "../../redux/productSlice";
import Loading from "../Loading";
import Product from "./Product";
import ReactPaginate from "react-paginate";

const Products = ({ category, sort }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);
  const [itemOffset, setItemOffset] = useState(0);

  /* Paginate */
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProduct(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  return (
    <div>
      {productsStatus == "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap">
            {currentItems
              ?.sort((a, b) =>
                sort == "inc"
                  ? a.price - b.price
                  : sort == "dec"
                  ? b.price - a.price
                  : ""
              )
              .map((product, i) => (
                <Product key={i} product={product} />
              ))}
          </div>

          {/* 
          Özetle, a.price - b.price kullanımı, artan sıralama (en düşükten en yükseğe) sağlıyor ve b.price - a.price kullanımı ise azalan sıralama (en yüksekten en düşüğe) sağlıyor. Yani, sort "inc" olduğunda a artan, "dec" olduğunda b azalan sırayla sıralamayı kontrol ediyor. */}

          <ReactPaginate
            className="paginate "
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Products;
