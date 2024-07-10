import UploadIcon from "@/components/icons/Upload";
import { Product } from "@/entities/Product";
import Image from "next/image";
import useProductFormController from "./actions";

interface IProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
  product: Product | null;
}

export default function ProductForm({
  isOpen,
  onClose,
  onSave,
  product,
}: IProductFormProps) {
  const {
    formatReal,
    handleChange,
    handleSubmit,
    imagePreview,
    isLoading,
    formData,
  } = useProductFormController({ isOpen, onClose, onSave, product });

  if (!isOpen) return null;

  return (
    <div className="w-full h-full flex flex-col items-start justify-center">
      <h1 className="font-semibold text-dark-gray dark:text-white">
        Cadastrar Produto
      </h1>
      <div className="my-4 lg:my-10 w-full h-px bg-gray dark:bg-medium-gray" />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="w-full"
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center h-full lg:max-h-96 gap-8">
          <div className="w-full lg:w-1/4 2xl:w-1/6 h-full flex flex-col items-start lg:items-center justify-center">
            <span className="text-medium-gray dark:text-white text-sm mb-2">
              Foto do Produto
            </span>
            <input
              type="file"
              name="image"
              id="image"
              accept=".jpg, .jpeg, .png"
              onChange={handleChange}
              hidden
            />
            <label
              htmlFor="image"
              className="rounded-md w-full h-full relative cursor-pointer"
            >
              {imagePreview ? (
                <Image
                  width={1000}
                  height={1000}
                  quality={100}
                  src={imagePreview}
                  alt="Produto"
                  className="lg:w-full lg:h-full lg:min-h-72 bg-gray dark:bg-white rounded-md object-cover"
                />
              ) : (
                <div className="hidden lg:block w-full h-full min-h-72 bg-gray dark:bg-white rounded-md" />
              )}
              <div className="flex items-center justify-between lg:justify-center gap-1 pt-2">
                <span className="text-white py-2 bg-purple text-center rounded-md lg:absolute bottom-0 w-auto lg:text-sm font-light flex items-center justify-center gap-1 lg:gap-1 text-xs px-2 lg:px-0 lg:w-full">
                  <UploadIcon className="w-7 lg:w-5 h-7 lg:h-5" />
                  Selecione um arquivo
                </span>
                <span className="w-auto text-xs">ou solte um arquivo aqui</span>
              </div>
            </label>
          </div>
          <div className="w-full h-full">
            <div className="flex flex-col gap-4 w-full">
              <div>
                <label className="text-medium-gray dark:text-white text-sm mb-2">
                  Nome do Produto
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray dark:border-dark-gray rounded w-full py-2 px-3 text-medium-gray leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="text-medium-gray dark:text-white text-sm mb-2">
                  Observações
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    maxLength={100}
                    className="shadow appearance-none border border-gray dark:border-dark-gray rounded w-full lg:py-2 lg:px-3 text-medium-gray leading-tight focus:outline-none focus:shadow-outline pb-10 pl-4 pt-2"
                  />
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 absolute bottom-2 right-5 text-medium-gray">
                    {formData.description.length}/100
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-3">
                <div className="w-full">
                  <label className="text-medium-gray dark:text-white text-sm mb-2">
                    Valor
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={formatReal(Number(formData.price))}
                    onChange={handleChange}
                    placeholder="R$"
                    className="shadow appearance-none border border-gray dark:border-dark-gray rounded w-full py-2 px-3 text-medium-gray leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="w-full">
                  <label className="text-medium-gray dark:text-white text-sm mb-2">
                    Quantidade
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="00"
                    className="shadow appearance-none border border-gray dark:border-dark-gray rounded w-full py-2 px-3 text-medium-gray leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden my-4 lg:my-10 w-full h-px bg-gray dark:bg-medium-gray" />

        <div className="flex items-center justify-end space-x-4 lg:mt-10 mb-20 lg:pb-0">
          <button
            className="bg-medium-gray text-white px-5 py-1 rounded-md"
            type="button"
            onClick={onClose}
          >
            Voltar
          </button>
          <button
            className="bg-purple text-white px-5 py-1 rounded-md"
            type="submit"
          >
            {isLoading ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </form>

      <div className="hidden lg:block my-10 w-full h-px bg-gray dark:bg-medium-gray" />
    </div>
  );
}
