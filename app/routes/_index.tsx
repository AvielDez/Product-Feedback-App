import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Product Feedback App" },
    { 
      name: "This will be purely a functional application with minimal styling", 
      content: "Welcome to the Product Feedback!" 
    },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to the product feedback application</h1>
    </div>
  );
}
