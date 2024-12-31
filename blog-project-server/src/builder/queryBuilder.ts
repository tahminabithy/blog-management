import { Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }
  doSearch(searchFields: string[]) {
    const serachTerm = this.query.search || '';
    this.modelQuery = this.modelQuery.find({
      $or: searchFields.map((field) => ({
        [field]: { $regex: serachTerm as string, $options: 'i' },
      })),
    });
    return this;
  }
  doSort() {
    const sort = (this.query.sort as string) || '';
    this.modelQuery = this.modelQuery?.sort(sort);
    return this;
  }
  doLimit() {
    const limit = (this.query.limit as number) || 1;
    this.modelQuery = this.modelQuery?.limit(limit);
    return this;
  }
  doFilter() {
    const queryObj = { ...this.query };
    const excludeFields = ['search', 'sort', 'limit'];
    excludeFields.forEach((key) => delete queryObj[key]);
    this.modelQuery = this.modelQuery.find(queryObj);
    return this;
  }
}
export default QueryBuilder;
