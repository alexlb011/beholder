import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Catalog from "./Catalog";
import { allProduct_Response } from "../../Tests/mocks/Product.mock";

describe("render Catalog", () => {
  it("Should render all elements from product", () => {
    render(<Catalog catalogData={allProduct_Response} />);
    allProduct_Response.forEach((product, index) => {
      const elementsToCheck = [
        product.product_name,
        product.product_category,
        product.product_description,
        product.product_value,
      ];
      const productContainer = screen.getByTestId(`Product-${index}`);

      elementsToCheck.forEach((text) => {
        const element = within(productContainer).getByText(text);
        expect(element).toBeDefined();
      });
      const elementImage = within(productContainer).getByAltText(
        product.product_image_alt
      );
      expect(elementImage).toBeDefined();
    });
  });
});
