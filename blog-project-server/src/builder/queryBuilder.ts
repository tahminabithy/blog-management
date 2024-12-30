import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchAbleFields: string[]) {
    const searchTerm = this.query?.search || '';
    this.modelQuery = this.modelQuery.find({
      $or: searchAbleFields.map((field: any) => {
        return { [field]: { $regex: searchTerm, $options: 'i' } }; // Case-insensitive regex
      }),
    });

    return this; // Return `this` to enable method chaining
  }
  //   filter(){

  //   }
}
export default QueryBuilder;
