'use client'
import Buttons from "./components/buttons";
import Table from "./components/table";
import ProductForm from "./components/productForm";
import useProductsController from "./actions";

export default function Products() {
  const {
    products,
    selectedProduct,
    isModalOpen,
    isMounted,
    setSelectedProduct,
    setIsModalOpen,
    handleAdd,
    handleEdit,
    handleDelete,
    handleSave,
  } = useProductsController();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="">
      {!isModalOpen ? (
        <div className="w-full h-full p-4">
          <Buttons
            onAdd={handleAdd}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
          <Table
            products={products}
            onSelectProduct={setSelectedProduct}
            onEditProduct={(product) => {
              setSelectedProduct(product);
              handleEdit();
            }}
            onDeleteProduct={(productId) => {
              setSelectedProduct(
                products.find((p) => p.id === productId) || null
              );
              handleDelete();
            }}
          />
        </div>
      ) : (
        <div className="w-full min-h-screen h-full flex flex-col items-center justify-start p-1">
          <ProductForm
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSave}
            product={selectedProduct}
          />
        </div>
      )}
    </div>
  );
}
