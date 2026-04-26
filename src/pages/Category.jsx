import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const filteredProducts = products.filter(
    (p) =>
      p.category &&
      categoryName &&
      p.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        {/* Header */}
        <div className="mb-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/products" className="hover:text-blue-600 transition-colors">Products</a>
            <span>/</span>
            <span className="text-slate-700 font-semibold capitalize">{categoryName}</span>
          </div>

          {/* Title row */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700
                text-xs font-semibold px-3 py-1.5 rounded-full mb-2 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                Category
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900
                tracking-tight capitalize">
                {categoryName}{" "}
                <span className="text-blue-600">Products</span>
              </h2>
            </div>

            {/* Count badge */}
            <div className="bg-white border-2 border-slate-100 rounded-xl px-4 py-2.5
              flex items-center gap-2 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-semibold text-slate-700">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
          </div>
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border-2 border-slate-100
            p-16 text-center">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              No products found
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              We couldn't find any products in the{" "}
              <span className="font-semibold text-slate-600 capitalize">
                {categoryName}
              </span>{" "}
              category.
            </p>
            <a href="/products"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700
                text-white text-sm font-semibold px-6 py-3 rounded-xl no-underline
                transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              Browse All Products
            </a>
          </div>

        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default CategoryPage;