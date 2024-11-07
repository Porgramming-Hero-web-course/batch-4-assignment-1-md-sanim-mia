In TypeScript, union types and intersection types are very important tools that allow us to combine different types together. Through these, we can easily handle complex data types in our projects, and the code becomes more flexible.

Let's now look at how union types and intersection types work and when they should be used.

1. Union Type
With a union type, we can specify that a value can be any one of several types. When a value can have multiple types, we use a union type.

For example, consider the following:

type TTypeX = string | number;
Here, TTypeX can either be a string or a number.

Now, whenever you want to allow a value to have multiple types, you will use a union type.

2. Intersection Types
Now let's talk about intersection types. With an intersection type, we can combine multiple types into one, resulting in a new type that includes all the properties of the combined types.

For example:
type TypeA = { name: string };
type TypeB = { age: number };

type TypeC = TypeA & TypeB;
Here, the TypeC type will contain all properties from both TypeA and TypeB. This means TypeC will have both the name and age properties.

