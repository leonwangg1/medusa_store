import { Region } from "@medusajs/medusa"
import { Button, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <>
      <div className="content-container pt-9 small:pt-12">
        <div className="flex justify-between mb-8">
          <Text className="txt-xlarge">{collection.title}</Text>
          <InteractiveLink href={`/collections/${collection.handle}`}>
            <Button variant="secondary">View all</Button>
          </InteractiveLink>
        </div>
      </div>
      <div className="product-container">
        <ul className="flex overflow-auto gap-x-[0.55rem] small:gap-x-4">
          {products &&
            products.map((product) => (
              <li key={product.id} className="flex-none w-40 small:w-72">
                <ProductPreview
                  productPreview={product}
                  region={region}
                  isFeatured
                />
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}
