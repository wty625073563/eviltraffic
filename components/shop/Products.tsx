'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { siteConfig } from '@/config/site'
import '@/styles/products.css'
import { productItem } from '@/types/shop'
import React from 'react'
import * as Icons from 'react-icons/bi'
import { RoughNotation } from 'react-rough-notation'

const Products = ({
  id,
  title,
  products
}: {
  id: string
  title: string
  products: productItem[]
}) => {
  return (
    <>
      <section
        id={id}
        className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 py-6 mb-7 "
      >
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color={siteConfig.mainColor}>
            {title}
          </RoughNotation>
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <li className="p-4" key={index}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex">
                    <span className="mr-4">
                      {product.icon &&
                        React.createElement((Icons as any)[product.icon], {
                          className: 'text-3xl'
                        })}
                    </span>
                    <span>{product.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Products
