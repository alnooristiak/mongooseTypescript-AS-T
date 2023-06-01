"# l2a2-mongoose-assignment-2-alnooristiak" 

# Question 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?
### Answer 1: Creating a model with an interface and schema in MongoDB helps define the structure of a collection by enforcing data consistency and integrity. With a defined schema, developers can specify the fields, their types, and validation rules, ensuring that documents conform to a predefined format. This aids in preventing data inconsistencies and errors. The defined model and schema also provide a clear understanding of the collection's structure, facilitating data manipulation and querying. It promotes code reusability and modularity by encapsulating database operations within the model, offering a convenient interface for interacting with the collection. In summary, it helps maintain a structured collection, ensures data integrity, and enhances code organization and maintainability.

# Question 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?
### Answer 2: Field filtering in MongoDB allows you to specify which fields to include or exclude in the returned documents. By using the projection parameter in a query, you can explicitly define the fields you want to retrieve or exclude from the result set. To include specific fields, you can use the "field: 1" notation, where 1 represents inclusion. Conversely, to exclude fields, you can use the "field: 0" notation, where 0 represents exclusion. This feature helps optimize query performance by reducing network transfer and processing overhead, returning only the necessary fields for the operation.

# Question 3: What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.
### Answer 3: Instance methods in MongoDB models are custom methods defined on individual documents within a collection. These methods can be accessed on specific document instances and are useful for performing document-specific operations or computations. For example, an instance method named calculateTotalPrice() could calculate and return the total price of a product based on its quantity and unit price.

# Question 4: How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.
### Answer 4: In MongoDB queries, comparison operators like "$ne" (not equal), "$gt" (greater than), "$lt" (less than), "$gte" (greater than or equal to), and "$lte" (less than or equal to) are used for comparisons. For example, to find documents where the "age" field is not equal to 30: `{ age: { $ne: 30 } }`. To retrieve documents where the "quantity" field is greater than 10: `{ quantity: { $gt: 10 } }`. To find documents where the "price" field is less than or equal to 50: `{ price: { $lte: 50 } }`.

# Question 5: What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?
### Answer 5: In MongoDB, the "$in" operator matches values against an array of values, while the "$nin" operator excludes values from a given array. They are used in queries to filter documents based on array comparisons.


##### I think i well solved all problems properly. 
##### Thank you Vhaiya,
"# mongooseTypescript-AS-T" 
