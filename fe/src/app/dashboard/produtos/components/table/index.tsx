import DataGrid, {
  Column,
  FilterRow,
  GroupPanel,
  Pager,
  Paging,
  Selection,
} from "devextreme-react/data-grid";

import "devextreme/dist/css/dx.dark.css";
import "devextreme/dist/css/dx.light.css";

import useTableController from "./actions";

import { Spinner } from "@/components/Spinner";
import DotsMenu from "@/components/icons/DotsMenu";
import { Product } from "@/entities/Product";
import Image from "next/image";

interface ITableProps {
  products: Product[];
  onSelectProduct: (product: Product | null) => void;
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (productId: number) => void;
}

export default function Table({
  products,
  onSelectProduct,
  onEditProduct,
  onDeleteProduct,
}: ITableProps) {

  const {
    isMounted,
    allowedPageSizes,
    handleMenuClick,
    handleEdit,
    handleDelete,
    formatPrice,
    formatQuantity,
    formatDate,
    menuVisible,
    selectedProduct,
    truncateString,
  } = useTableController({
    onDeleteProduct,
    onEditProduct,
    onSelectProduct,
    products,
  });

  function cellRender(cellData: { value: string }) {
    return (
      <Image
        width={1000}
        height={1000}
        quality={100}
        src={cellData.value}
        alt="product"
        className="w-10 h-10 m-auto rounded-lg object-cover"
      />
    );
  }

  if (!isMounted) {
    return (
      <div className="w-screen h-screen flex items-start mt-10 justify-center">
        <Spinner className="w-20 lg:w-20 h-20 lg:h-20" />
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <div className="hidden lg:flex">
        <DataGrid
          dataSource={products}
          keyExpr="id"
          className="m-auto text-center"
          columnAutoWidth={true}
          allowColumnReordering={true}
          rowAlternationEnabled={true}
          allowColumnResizing
          remoteOperations={true}
          onSelectionChanged={(e) =>
            onSelectProduct(e.selectedRowsData[0] || null)
          }
        >
          <FilterRow visible />
          <GroupPanel
            visible
            emptyPanelText="Arraste o cabeçalho de uma coluna aqui para agrupar por essa coluna"
          />
          <Selection mode="multiple" />
          <Paging defaultPageSize={10} />
          <Pager
            visible
            allowedPageSizes={allowedPageSizes}
            displayMode="full"
            showPageSizeSelector
            showNavigationButtons
          />
          <Column
            dataField="image"
            cellRender={cellRender}
            caption=""
            width={80}
            allowFiltering={false}
            allowGrouping={false}
            allowReordering={false}
          />
          <Column dataField="name" caption="Nome" />
          <Column dataField="description" caption="Descrição" />
          <Column
            dataField="price"
            caption="Preço"
            dataType="number"
            format={{ type: "currency", precision: 2 }}
            customizeText={formatPrice}
          />
          <Column
            dataField="quantity"
            caption="Quantidade"
            dataType="number"
            customizeText={formatQuantity}
          />
          <Column
            dataField="registrationDate"
            caption="Data de Cadastro"
            dataType="date"
            customizeText={formatDate}
          />
        </DataGrid>
      </div>

      <div className="lg:hidden w-full h-full flex flex-col gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative p-2 gap-2 flex text-[10px] !rounded-md h-full w-full min-h-24 max-h-24 shadow-md shadow-black/20 dark:bg-[#323236]"
          >
            <div className="flex justify-center min-w-[20%] max-w-[20%] p-22">
              <Image
                width={1000}
                height={1000}
                quality={100}
                src={product.image}
                alt="product"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-1 overflow-hidden line-clamp-2">
              <div className="flex items-center justify-between w-full">
                <div className="font-semibold">{truncateString(product.name, 15)}</div>
                <div>
                  <span>Data de cadastro: </span>
                  {formatDate({ value: product.registrationDate })}
                </div>
              </div>
              <div className="line-clamp-2">
                <span>Descrição: </span>
                {product.description}
              </div>
              <div className="flex items-center justify-between w-full">
                <div>
                  <span>Valor: </span>
                  {formatPrice({ value: product.price })}
                </div>
                <div>
                  <span>Quantidade: </span>
                  {formatQuantity({ value: product.quantity })}
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-start h-full justify-center">
              <button
                className="flex h-full bg-gray-200 rounded-lg"
                onClick={() => handleMenuClick(product)}
              >
                <DotsMenu className="w-4 h-4 stroke-black dark:stroke-white" />
              </button>
              {menuVisible && selectedProduct?.id === product.id && (
                <div className="absolute right-6 bg-white dark:bg-[#323236] lg:shadow-lg rounded-md z-10 shadow-md shadow-black/20 dark:border dark:border-dark-gray text-center">
                  <div
                    className="px-3 py-1 cursor-pointer hover:bg-gray-100 dark:border-b dark:border-dark-gray"
                    onClick={handleEdit}
                  >
                    Editar
                  </div>
                  <div
                    className="px-3 py-1 cursor-pointer hover:bg-gray-100"
                    onClick={handleDelete}
                  >
                    Excluir
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
