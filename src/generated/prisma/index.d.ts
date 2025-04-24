
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Statement
 * 
 */
export type Statement = $Result.DefaultSelection<Prisma.$StatementPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Budget
 * 
 */
export type Budget = $Result.DefaultSelection<Prisma.$BudgetPayload>
/**
 * Model BudgetCategory
 * 
 */
export type BudgetCategory = $Result.DefaultSelection<Prisma.$BudgetCategoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountType: {
  CHECKING: 'CHECKING',
  SAVINGS: 'SAVINGS',
  CREDIT_CARD: 'CREDIT_CARD',
  INVESTMENT: 'INVESTMENT',
  LOAN: 'LOAN',
  WALLET: 'WALLET'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]


export const Currency: {
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  KES: 'KES'
};

export type Currency = (typeof Currency)[keyof typeof Currency]


export const FileType: {
  csv: 'csv',
  pdf: 'pdf'
};

export type FileType = (typeof FileType)[keyof typeof FileType]


export const CategoryType: {
  system: 'system',
  user: 'user'
};

export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType]


export const TransactionType: {
  income: 'income',
  expense: 'expense',
  transfer: 'transfer'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]

}

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

export type Currency = $Enums.Currency

export const Currency: typeof $Enums.Currency

export type FileType = $Enums.FileType

export const FileType: typeof $Enums.FileType

export type CategoryType = $Enums.CategoryType

export const CategoryType: typeof $Enums.CategoryType

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.statement`: Exposes CRUD operations for the **Statement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statements
    * const statements = await prisma.statement.findMany()
    * ```
    */
  get statement(): Prisma.StatementDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;

  /**
   * `prisma.budget`: Exposes CRUD operations for the **Budget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Budgets
    * const budgets = await prisma.budget.findMany()
    * ```
    */
  get budget(): Prisma.BudgetDelegate<ExtArgs>;

  /**
   * `prisma.budgetCategory`: Exposes CRUD operations for the **BudgetCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BudgetCategories
    * const budgetCategories = await prisma.budgetCategory.findMany()
    * ```
    */
  get budgetCategory(): Prisma.BudgetCategoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Statement: 'Statement',
    Category: 'Category',
    Transaction: 'Transaction',
    Budget: 'Budget',
    BudgetCategory: 'BudgetCategory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "account" | "statement" | "category" | "transaction" | "budget" | "budgetCategory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Statement: {
        payload: Prisma.$StatementPayload<ExtArgs>
        fields: Prisma.StatementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatementPayload>
          }
          findFirst: {
            args: Prisma.StatementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatementPayload>
          }
          findMany: {
            args: Prisma.StatementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatementPayload>[]
          }
          create: {
            args: Prisma.StatementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatementPayload>
          }
          createMany: {
            args: Prisma.StatementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatementPayload>[]
          }
          delete: {
            args: Prisma.StatementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatementPayload>
          }
          update: {
            args: Prisma.StatementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatementPayload>
          }
          deleteMany: {
            args: Prisma.StatementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StatementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatementPayload>
          }
          aggregate: {
            args: Prisma.StatementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatement>
          }
          groupBy: {
            args: Prisma.StatementGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatementGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatementCountArgs<ExtArgs>
            result: $Utils.Optional<StatementCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Budget: {
        payload: Prisma.$BudgetPayload<ExtArgs>
        fields: Prisma.BudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findFirst: {
            args: Prisma.BudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findMany: {
            args: Prisma.BudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          create: {
            args: Prisma.BudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          createMany: {
            args: Prisma.BudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BudgetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          delete: {
            args: Prisma.BudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          update: {
            args: Prisma.BudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          deleteMany: {
            args: Prisma.BudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          aggregate: {
            args: Prisma.BudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudget>
          }
          groupBy: {
            args: Prisma.BudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetCountAggregateOutputType> | number
          }
        }
      }
      BudgetCategory: {
        payload: Prisma.$BudgetCategoryPayload<ExtArgs>
        fields: Prisma.BudgetCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetCategoryPayload>
          }
          findFirst: {
            args: Prisma.BudgetCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetCategoryPayload>
          }
          findMany: {
            args: Prisma.BudgetCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetCategoryPayload>[]
          }
          create: {
            args: Prisma.BudgetCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetCategoryPayload>
          }
          createMany: {
            args: Prisma.BudgetCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BudgetCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetCategoryPayload>[]
          }
          delete: {
            args: Prisma.BudgetCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetCategoryPayload>
          }
          update: {
            args: Prisma.BudgetCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BudgetCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BudgetCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetCategoryPayload>
          }
          aggregate: {
            args: Prisma.BudgetCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudgetCategory>
          }
          groupBy: {
            args: Prisma.BudgetCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetCategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    statements: number
    transactions: number
    budgets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    statements?: boolean | UserCountOutputTypeCountStatementsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    budgets?: boolean | UserCountOutputTypeCountBudgetsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStatementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
  }


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    transactions: number
    statements: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | AccountCountOutputTypeCountTransactionsArgs
    statements?: boolean | AccountCountOutputTypeCountStatementsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountStatementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatementWhereInput
  }


  /**
   * Count Type StatementCountOutputType
   */

  export type StatementCountOutputType = {
    transactions: number
  }

  export type StatementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | StatementCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * StatementCountOutputType without action
   */
  export type StatementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatementCountOutputType
     */
    select?: StatementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatementCountOutputType without action
   */
  export type StatementCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    transactions: number
    budgetCategory: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CategoryCountOutputTypeCountTransactionsArgs
    budgetCategory?: boolean | CategoryCountOutputTypeCountBudgetCategoryArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBudgetCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetCategoryWhereInput
  }


  /**
   * Count Type BudgetCountOutputType
   */

  export type BudgetCountOutputType = {
    categories: number
  }

  export type BudgetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | BudgetCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * BudgetCountOutputType without action
   */
  export type BudgetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCountOutputType
     */
    select?: BudgetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BudgetCountOutputType without action
   */
  export type BudgetCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetCategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    statements?: boolean | User$statementsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    budgets?: boolean | User$budgetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    statements?: boolean | User$statementsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    budgets?: boolean | User$budgetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      statements: Prisma.$StatementPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      budgets: Prisma.$BudgetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    statements<T extends User$statementsArgs<ExtArgs> = {}>(args?: Subset<T, User$statementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatementPayload<ExtArgs>, T, "findMany"> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    budgets<T extends User$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, User$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.statements
   */
  export type User$statementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statement
     */
    select?: StatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatementInclude<ExtArgs> | null
    where?: StatementWhereInput
    orderBy?: StatementOrderByWithRelationInput | StatementOrderByWithRelationInput[]
    cursor?: StatementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatementScalarFieldEnum | StatementScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.budgets
   */
  export type User$budgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    cursor?: BudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    balance: Decimal | null
  }

  export type AccountSumAggregateOutputType = {
    balance: Decimal | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    type: $Enums.AccountType | null
    currency: $Enums.Currency | null
    balance: Decimal | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    type: $Enums.AccountType | null
    currency: $Enums.Currency | null
    balance: Decimal | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    type: number
    currency: number
    balance: number
    isDefault: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    balance?: true
  }

  export type AccountSumAggregateInputType = {
    balance?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    currency?: true
    balance?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    currency?: true
    balance?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    currency?: true
    balance?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    name: string
    type: $Enums.AccountType
    currency: $Enums.Currency
    balance: Decimal
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    balance?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Account$transactionsArgs<ExtArgs>
    statements?: boolean | Account$statementsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    balance?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    balance?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Account$transactionsArgs<ExtArgs>
    statements?: boolean | Account$statementsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      statements: Prisma.$StatementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      type: $Enums.AccountType
      currency: $Enums.Currency
      balance: Prisma.Decimal
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    transactions<T extends Account$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Account$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    statements<T extends Account$statementsArgs<ExtArgs> = {}>(args?: Subset<T, Account$statementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatementPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'AccountType'>
    readonly currency: FieldRef<"Account", 'Currency'>
    readonly balance: FieldRef<"Account", 'Decimal'>
    readonly isDefault: FieldRef<"Account", 'Boolean'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account.transactions
   */
  export type Account$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Account.statements
   */
  export type Account$statementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statement
     */
    select?: StatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatementInclude<ExtArgs> | null
    where?: StatementWhereInput
    orderBy?: StatementOrderByWithRelationInput | StatementOrderByWithRelationInput[]
    cursor?: StatementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatementScalarFieldEnum | StatementScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Statement
   */

  export type AggregateStatement = {
    _count: StatementCountAggregateOutputType | null
    _min: StatementMinAggregateOutputType | null
    _max: StatementMaxAggregateOutputType | null
  }

  export type StatementMinAggregateOutputType = {
    id: string | null
    userId: string | null
    accountId: string | null
    filename: string | null
    fileType: $Enums.FileType | null
    uploadedAt: Date | null
    processedAt: Date | null
  }

  export type StatementMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    accountId: string | null
    filename: string | null
    fileType: $Enums.FileType | null
    uploadedAt: Date | null
    processedAt: Date | null
  }

  export type StatementCountAggregateOutputType = {
    id: number
    userId: number
    accountId: number
    filename: number
    fileType: number
    uploadedAt: number
    processedAt: number
    _all: number
  }


  export type StatementMinAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    filename?: true
    fileType?: true
    uploadedAt?: true
    processedAt?: true
  }

  export type StatementMaxAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    filename?: true
    fileType?: true
    uploadedAt?: true
    processedAt?: true
  }

  export type StatementCountAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    filename?: true
    fileType?: true
    uploadedAt?: true
    processedAt?: true
    _all?: true
  }

  export type StatementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statement to aggregate.
     */
    where?: StatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statements to fetch.
     */
    orderBy?: StatementOrderByWithRelationInput | StatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statements
    **/
    _count?: true | StatementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatementMaxAggregateInputType
  }

  export type GetStatementAggregateType<T extends StatementAggregateArgs> = {
        [P in keyof T & keyof AggregateStatement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatement[P]>
      : GetScalarType<T[P], AggregateStatement[P]>
  }




  export type StatementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatementWhereInput
    orderBy?: StatementOrderByWithAggregationInput | StatementOrderByWithAggregationInput[]
    by: StatementScalarFieldEnum[] | StatementScalarFieldEnum
    having?: StatementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatementCountAggregateInputType | true
    _min?: StatementMinAggregateInputType
    _max?: StatementMaxAggregateInputType
  }

  export type StatementGroupByOutputType = {
    id: string
    userId: string
    accountId: string
    filename: string
    fileType: $Enums.FileType
    uploadedAt: Date
    processedAt: Date | null
    _count: StatementCountAggregateOutputType | null
    _min: StatementMinAggregateOutputType | null
    _max: StatementMaxAggregateOutputType | null
  }

  type GetStatementGroupByPayload<T extends StatementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatementGroupByOutputType[P]>
            : GetScalarType<T[P], StatementGroupByOutputType[P]>
        }
      >
    >


  export type StatementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    filename?: boolean
    fileType?: boolean
    uploadedAt?: boolean
    processedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    transactions?: boolean | Statement$transactionsArgs<ExtArgs>
    _count?: boolean | StatementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statement"]>

  export type StatementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    filename?: boolean
    fileType?: boolean
    uploadedAt?: boolean
    processedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statement"]>

  export type StatementSelectScalar = {
    id?: boolean
    userId?: boolean
    accountId?: boolean
    filename?: boolean
    fileType?: boolean
    uploadedAt?: boolean
    processedAt?: boolean
  }

  export type StatementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    transactions?: boolean | Statement$transactionsArgs<ExtArgs>
    _count?: boolean | StatementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StatementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $StatementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Statement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      accountId: string
      filename: string
      fileType: $Enums.FileType
      uploadedAt: Date
      processedAt: Date | null
    }, ExtArgs["result"]["statement"]>
    composites: {}
  }

  type StatementGetPayload<S extends boolean | null | undefined | StatementDefaultArgs> = $Result.GetResult<Prisma.$StatementPayload, S>

  type StatementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StatementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StatementCountAggregateInputType | true
    }

  export interface StatementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Statement'], meta: { name: 'Statement' } }
    /**
     * Find zero or one Statement that matches the filter.
     * @param {StatementFindUniqueArgs} args - Arguments to find a Statement
     * @example
     * // Get one Statement
     * const statement = await prisma.statement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatementFindUniqueArgs>(args: SelectSubset<T, StatementFindUniqueArgs<ExtArgs>>): Prisma__StatementClient<$Result.GetResult<Prisma.$StatementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Statement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StatementFindUniqueOrThrowArgs} args - Arguments to find a Statement
     * @example
     * // Get one Statement
     * const statement = await prisma.statement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatementFindUniqueOrThrowArgs>(args: SelectSubset<T, StatementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatementClient<$Result.GetResult<Prisma.$StatementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Statement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatementFindFirstArgs} args - Arguments to find a Statement
     * @example
     * // Get one Statement
     * const statement = await prisma.statement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatementFindFirstArgs>(args?: SelectSubset<T, StatementFindFirstArgs<ExtArgs>>): Prisma__StatementClient<$Result.GetResult<Prisma.$StatementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Statement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatementFindFirstOrThrowArgs} args - Arguments to find a Statement
     * @example
     * // Get one Statement
     * const statement = await prisma.statement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatementFindFirstOrThrowArgs>(args?: SelectSubset<T, StatementFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatementClient<$Result.GetResult<Prisma.$StatementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Statements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statements
     * const statements = await prisma.statement.findMany()
     * 
     * // Get first 10 Statements
     * const statements = await prisma.statement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statementWithIdOnly = await prisma.statement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatementFindManyArgs>(args?: SelectSubset<T, StatementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Statement.
     * @param {StatementCreateArgs} args - Arguments to create a Statement.
     * @example
     * // Create one Statement
     * const Statement = await prisma.statement.create({
     *   data: {
     *     // ... data to create a Statement
     *   }
     * })
     * 
     */
    create<T extends StatementCreateArgs>(args: SelectSubset<T, StatementCreateArgs<ExtArgs>>): Prisma__StatementClient<$Result.GetResult<Prisma.$StatementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Statements.
     * @param {StatementCreateManyArgs} args - Arguments to create many Statements.
     * @example
     * // Create many Statements
     * const statement = await prisma.statement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatementCreateManyArgs>(args?: SelectSubset<T, StatementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Statements and returns the data saved in the database.
     * @param {StatementCreateManyAndReturnArgs} args - Arguments to create many Statements.
     * @example
     * // Create many Statements
     * const statement = await prisma.statement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Statements and only return the `id`
     * const statementWithIdOnly = await prisma.statement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatementCreateManyAndReturnArgs>(args?: SelectSubset<T, StatementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Statement.
     * @param {StatementDeleteArgs} args - Arguments to delete one Statement.
     * @example
     * // Delete one Statement
     * const Statement = await prisma.statement.delete({
     *   where: {
     *     // ... filter to delete one Statement
     *   }
     * })
     * 
     */
    delete<T extends StatementDeleteArgs>(args: SelectSubset<T, StatementDeleteArgs<ExtArgs>>): Prisma__StatementClient<$Result.GetResult<Prisma.$StatementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Statement.
     * @param {StatementUpdateArgs} args - Arguments to update one Statement.
     * @example
     * // Update one Statement
     * const statement = await prisma.statement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatementUpdateArgs>(args: SelectSubset<T, StatementUpdateArgs<ExtArgs>>): Prisma__StatementClient<$Result.GetResult<Prisma.$StatementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Statements.
     * @param {StatementDeleteManyArgs} args - Arguments to filter Statements to delete.
     * @example
     * // Delete a few Statements
     * const { count } = await prisma.statement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatementDeleteManyArgs>(args?: SelectSubset<T, StatementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statements
     * const statement = await prisma.statement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatementUpdateManyArgs>(args: SelectSubset<T, StatementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Statement.
     * @param {StatementUpsertArgs} args - Arguments to update or create a Statement.
     * @example
     * // Update or create a Statement
     * const statement = await prisma.statement.upsert({
     *   create: {
     *     // ... data to create a Statement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Statement we want to update
     *   }
     * })
     */
    upsert<T extends StatementUpsertArgs>(args: SelectSubset<T, StatementUpsertArgs<ExtArgs>>): Prisma__StatementClient<$Result.GetResult<Prisma.$StatementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Statements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatementCountArgs} args - Arguments to filter Statements to count.
     * @example
     * // Count the number of Statements
     * const count = await prisma.statement.count({
     *   where: {
     *     // ... the filter for the Statements we want to count
     *   }
     * })
    **/
    count<T extends StatementCountArgs>(
      args?: Subset<T, StatementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Statement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatementAggregateArgs>(args: Subset<T, StatementAggregateArgs>): Prisma.PrismaPromise<GetStatementAggregateType<T>>

    /**
     * Group by Statement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatementGroupByArgs['orderBy'] }
        : { orderBy?: StatementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Statement model
   */
  readonly fields: StatementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Statement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    transactions<T extends Statement$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Statement$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Statement model
   */ 
  interface StatementFieldRefs {
    readonly id: FieldRef<"Statement", 'String'>
    readonly userId: FieldRef<"Statement", 'String'>
    readonly accountId: FieldRef<"Statement", 'String'>
    readonly filename: FieldRef<"Statement", 'String'>
    readonly fileType: FieldRef<"Statement", 'FileType'>
    readonly uploadedAt: FieldRef<"Statement", 'DateTime'>
    readonly processedAt: FieldRef<"Statement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Statement findUnique
   */
  export type StatementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statement
     */
    select?: StatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatementInclude<ExtArgs> | null
    /**
     * Filter, which Statement to fetch.
     */
    where: StatementWhereUniqueInput
  }

  /**
   * Statement findUniqueOrThrow
   */
  export type StatementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statement
     */
    select?: StatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatementInclude<ExtArgs> | null
    /**
     * Filter, which Statement to fetch.
     */
    where: StatementWhereUniqueInput
  }

  /**
   * Statement findFirst
   */
  export type StatementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statement
     */
    select?: StatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatementInclude<ExtArgs> | null
    /**
     * Filter, which Statement to fetch.
     */
    where?: StatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statements to fetch.
     */
    orderBy?: StatementOrderByWithRelationInput | StatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statements.
     */
    cursor?: StatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statements.
     */
    distinct?: StatementScalarFieldEnum | StatementScalarFieldEnum[]
  }

  /**
   * Statement findFirstOrThrow
   */
  export type StatementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statement
     */
    select?: StatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatementInclude<ExtArgs> | null
    /**
     * Filter, which Statement to fetch.
     */
    where?: StatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statements to fetch.
     */
    orderBy?: StatementOrderByWithRelationInput | StatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statements.
     */
    cursor?: StatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statements.
     */
    distinct?: StatementScalarFieldEnum | StatementScalarFieldEnum[]
  }

  /**
   * Statement findMany
   */
  export type StatementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statement
     */
    select?: StatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatementInclude<ExtArgs> | null
    /**
     * Filter, which Statements to fetch.
     */
    where?: StatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statements to fetch.
     */
    orderBy?: StatementOrderByWithRelationInput | StatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statements.
     */
    cursor?: StatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statements.
     */
    skip?: number
    distinct?: StatementScalarFieldEnum | StatementScalarFieldEnum[]
  }

  /**
   * Statement create
   */
  export type StatementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statement
     */
    select?: StatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatementInclude<ExtArgs> | null
    /**
     * The data needed to create a Statement.
     */
    data: XOR<StatementCreateInput, StatementUncheckedCreateInput>
  }

  /**
   * Statement createMany
   */
  export type StatementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statements.
     */
    data: StatementCreateManyInput | StatementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Statement createManyAndReturn
   */
  export type StatementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statement
     */
    select?: StatementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Statements.
     */
    data: StatementCreateManyInput | StatementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Statement update
   */
  export type StatementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statement
     */
    select?: StatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatementInclude<ExtArgs> | null
    /**
     * The data needed to update a Statement.
     */
    data: XOR<StatementUpdateInput, StatementUncheckedUpdateInput>
    /**
     * Choose, which Statement to update.
     */
    where: StatementWhereUniqueInput
  }

  /**
   * Statement updateMany
   */
  export type StatementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statements.
     */
    data: XOR<StatementUpdateManyMutationInput, StatementUncheckedUpdateManyInput>
    /**
     * Filter which Statements to update
     */
    where?: StatementWhereInput
  }

  /**
   * Statement upsert
   */
  export type StatementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statement
     */
    select?: StatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatementInclude<ExtArgs> | null
    /**
     * The filter to search for the Statement to update in case it exists.
     */
    where: StatementWhereUniqueInput
    /**
     * In case the Statement found by the `where` argument doesn't exist, create a new Statement with this data.
     */
    create: XOR<StatementCreateInput, StatementUncheckedCreateInput>
    /**
     * In case the Statement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatementUpdateInput, StatementUncheckedUpdateInput>
  }

  /**
   * Statement delete
   */
  export type StatementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statement
     */
    select?: StatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatementInclude<ExtArgs> | null
    /**
     * Filter which Statement to delete.
     */
    where: StatementWhereUniqueInput
  }

  /**
   * Statement deleteMany
   */
  export type StatementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statements to delete
     */
    where?: StatementWhereInput
  }

  /**
   * Statement.transactions
   */
  export type Statement$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Statement without action
   */
  export type StatementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statement
     */
    select?: StatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatementInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.CategoryType | null
    keywords: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.CategoryType | null
    keywords: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    type: number
    keywords: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    keywords?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    keywords?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    keywords?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    type: $Enums.CategoryType
    keywords: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    keywords?: boolean
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    budgetCategory?: boolean | Category$budgetCategoryArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    keywords?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    keywords?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    budgetCategory?: boolean | Category$budgetCategoryArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      budgetCategory: Prisma.$BudgetCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.CategoryType
      keywords: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends Category$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Category$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    budgetCategory<T extends Category$budgetCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Category$budgetCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetCategoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly type: FieldRef<"Category", 'CategoryType'>
    readonly keywords: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.transactions
   */
  export type Category$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Category.budgetCategory
   */
  export type Category$budgetCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCategory
     */
    select?: BudgetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetCategoryInclude<ExtArgs> | null
    where?: BudgetCategoryWhereInput
    orderBy?: BudgetCategoryOrderByWithRelationInput | BudgetCategoryOrderByWithRelationInput[]
    cursor?: BudgetCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetCategoryScalarFieldEnum | BudgetCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    accountId: string | null
    statementId: string | null
    date: Date | null
    description: string | null
    amount: Decimal | null
    type: $Enums.TransactionType | null
    categoryId: string | null
    currency: $Enums.Currency | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    accountId: string | null
    statementId: string | null
    date: Date | null
    description: string | null
    amount: Decimal | null
    type: $Enums.TransactionType | null
    categoryId: string | null
    currency: $Enums.Currency | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    accountId: number
    statementId: number
    date: number
    description: number
    amount: number
    type: number
    categoryId: number
    currency: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    statementId?: true
    date?: true
    description?: true
    amount?: true
    type?: true
    categoryId?: true
    currency?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    statementId?: true
    date?: true
    description?: true
    amount?: true
    type?: true
    categoryId?: true
    currency?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    statementId?: true
    date?: true
    description?: true
    amount?: true
    type?: true
    categoryId?: true
    currency?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    userId: string
    accountId: string
    statementId: string | null
    date: Date
    description: string
    amount: Decimal
    type: $Enums.TransactionType
    categoryId: string | null
    currency: $Enums.Currency
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    statementId?: boolean
    date?: boolean
    description?: boolean
    amount?: boolean
    type?: boolean
    categoryId?: boolean
    currency?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    statement?: boolean | Transaction$statementArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    statementId?: boolean
    date?: boolean
    description?: boolean
    amount?: boolean
    type?: boolean
    categoryId?: boolean
    currency?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    statement?: boolean | Transaction$statementArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    accountId?: boolean
    statementId?: boolean
    date?: boolean
    description?: boolean
    amount?: boolean
    type?: boolean
    categoryId?: boolean
    currency?: boolean
    createdAt?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    statement?: boolean | Transaction$statementArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    statement?: boolean | Transaction$statementArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs>
      statement: Prisma.$StatementPayload<ExtArgs> | null
      category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      accountId: string
      statementId: string | null
      date: Date
      description: string
      amount: Prisma.Decimal
      type: $Enums.TransactionType
      categoryId: string | null
      currency: $Enums.Currency
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    statement<T extends Transaction$statementArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$statementArgs<ExtArgs>>): Prisma__StatementClient<$Result.GetResult<Prisma.$StatementPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    category<T extends Transaction$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly accountId: FieldRef<"Transaction", 'String'>
    readonly statementId: FieldRef<"Transaction", 'String'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly categoryId: FieldRef<"Transaction", 'String'>
    readonly currency: FieldRef<"Transaction", 'Currency'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction.statement
   */
  export type Transaction$statementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statement
     */
    select?: StatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatementInclude<ExtArgs> | null
    where?: StatementWhereInput
  }

  /**
   * Transaction.category
   */
  export type Transaction$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Budget
   */

  export type AggregateBudget = {
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  export type BudgetAvgAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type BudgetSumAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type BudgetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    currency: $Enums.Currency | null
    totalAmount: Decimal | null
    periodStart: Date | null
    periodEnd: Date | null
    createdAt: Date | null
  }

  export type BudgetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    currency: $Enums.Currency | null
    totalAmount: Decimal | null
    periodStart: Date | null
    periodEnd: Date | null
    createdAt: Date | null
  }

  export type BudgetCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    currency: number
    totalAmount: number
    periodStart: number
    periodEnd: number
    createdAt: number
    _all: number
  }


  export type BudgetAvgAggregateInputType = {
    totalAmount?: true
  }

  export type BudgetSumAggregateInputType = {
    totalAmount?: true
  }

  export type BudgetMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    currency?: true
    totalAmount?: true
    periodStart?: true
    periodEnd?: true
    createdAt?: true
  }

  export type BudgetMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    currency?: true
    totalAmount?: true
    periodStart?: true
    periodEnd?: true
    createdAt?: true
  }

  export type BudgetCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    currency?: true
    totalAmount?: true
    periodStart?: true
    periodEnd?: true
    createdAt?: true
    _all?: true
  }

  export type BudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budget to aggregate.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Budgets
    **/
    _count?: true | BudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetMaxAggregateInputType
  }

  export type GetBudgetAggregateType<T extends BudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudget[P]>
      : GetScalarType<T[P], AggregateBudget[P]>
  }




  export type BudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithAggregationInput | BudgetOrderByWithAggregationInput[]
    by: BudgetScalarFieldEnum[] | BudgetScalarFieldEnum
    having?: BudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetCountAggregateInputType | true
    _avg?: BudgetAvgAggregateInputType
    _sum?: BudgetSumAggregateInputType
    _min?: BudgetMinAggregateInputType
    _max?: BudgetMaxAggregateInputType
  }

  export type BudgetGroupByOutputType = {
    id: string
    userId: string
    name: string
    currency: $Enums.Currency
    totalAmount: Decimal
    periodStart: Date
    periodEnd: Date
    createdAt: Date
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  type GetBudgetGroupByPayload<T extends BudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetGroupByOutputType[P]>
        }
      >
    >


  export type BudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    currency?: boolean
    totalAmount?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | Budget$categoriesArgs<ExtArgs>
    _count?: boolean | BudgetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    currency?: boolean
    totalAmount?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    currency?: boolean
    totalAmount?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    createdAt?: boolean
  }

  export type BudgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | Budget$categoriesArgs<ExtArgs>
    _count?: boolean | BudgetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BudgetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Budget"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      categories: Prisma.$BudgetCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      currency: $Enums.Currency
      totalAmount: Prisma.Decimal
      periodStart: Date
      periodEnd: Date
      createdAt: Date
    }, ExtArgs["result"]["budget"]>
    composites: {}
  }

  type BudgetGetPayload<S extends boolean | null | undefined | BudgetDefaultArgs> = $Result.GetResult<Prisma.$BudgetPayload, S>

  type BudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BudgetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BudgetCountAggregateInputType | true
    }

  export interface BudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Budget'], meta: { name: 'Budget' } }
    /**
     * Find zero or one Budget that matches the filter.
     * @param {BudgetFindUniqueArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BudgetFindUniqueArgs>(args: SelectSubset<T, BudgetFindUniqueArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Budget that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BudgetFindUniqueOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, BudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Budget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BudgetFindFirstArgs>(args?: SelectSubset<T, BudgetFindFirstArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Budget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, BudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budget.findMany()
     * 
     * // Get first 10 Budgets
     * const budgets = await prisma.budget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetWithIdOnly = await prisma.budget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BudgetFindManyArgs>(args?: SelectSubset<T, BudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Budget.
     * @param {BudgetCreateArgs} args - Arguments to create a Budget.
     * @example
     * // Create one Budget
     * const Budget = await prisma.budget.create({
     *   data: {
     *     // ... data to create a Budget
     *   }
     * })
     * 
     */
    create<T extends BudgetCreateArgs>(args: SelectSubset<T, BudgetCreateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Budgets.
     * @param {BudgetCreateManyArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BudgetCreateManyArgs>(args?: SelectSubset<T, BudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Budgets and returns the data saved in the database.
     * @param {BudgetCreateManyAndReturnArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BudgetCreateManyAndReturnArgs>(args?: SelectSubset<T, BudgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Budget.
     * @param {BudgetDeleteArgs} args - Arguments to delete one Budget.
     * @example
     * // Delete one Budget
     * const Budget = await prisma.budget.delete({
     *   where: {
     *     // ... filter to delete one Budget
     *   }
     * })
     * 
     */
    delete<T extends BudgetDeleteArgs>(args: SelectSubset<T, BudgetDeleteArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Budget.
     * @param {BudgetUpdateArgs} args - Arguments to update one Budget.
     * @example
     * // Update one Budget
     * const budget = await prisma.budget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BudgetUpdateArgs>(args: SelectSubset<T, BudgetUpdateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Budgets.
     * @param {BudgetDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BudgetDeleteManyArgs>(args?: SelectSubset<T, BudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BudgetUpdateManyArgs>(args: SelectSubset<T, BudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Budget.
     * @param {BudgetUpsertArgs} args - Arguments to update or create a Budget.
     * @example
     * // Update or create a Budget
     * const budget = await prisma.budget.upsert({
     *   create: {
     *     // ... data to create a Budget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budget we want to update
     *   }
     * })
     */
    upsert<T extends BudgetUpsertArgs>(args: SelectSubset<T, BudgetUpsertArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budget.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
    **/
    count<T extends BudgetCountArgs>(
      args?: Subset<T, BudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BudgetAggregateArgs>(args: Subset<T, BudgetAggregateArgs>): Prisma.PrismaPromise<GetBudgetAggregateType<T>>

    /**
     * Group by Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetGroupByArgs['orderBy'] }
        : { orderBy?: BudgetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Budget model
   */
  readonly fields: BudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Budget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    categories<T extends Budget$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Budget$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetCategoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Budget model
   */ 
  interface BudgetFieldRefs {
    readonly id: FieldRef<"Budget", 'String'>
    readonly userId: FieldRef<"Budget", 'String'>
    readonly name: FieldRef<"Budget", 'String'>
    readonly currency: FieldRef<"Budget", 'Currency'>
    readonly totalAmount: FieldRef<"Budget", 'Decimal'>
    readonly periodStart: FieldRef<"Budget", 'DateTime'>
    readonly periodEnd: FieldRef<"Budget", 'DateTime'>
    readonly createdAt: FieldRef<"Budget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Budget findUnique
   */
  export type BudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findUniqueOrThrow
   */
  export type BudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findFirst
   */
  export type BudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findFirstOrThrow
   */
  export type BudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findMany
   */
  export type BudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget create
   */
  export type BudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to create a Budget.
     */
    data: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
  }

  /**
   * Budget createMany
   */
  export type BudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Budget createManyAndReturn
   */
  export type BudgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Budget update
   */
  export type BudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to update a Budget.
     */
    data: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
    /**
     * Choose, which Budget to update.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget updateMany
   */
  export type BudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
  }

  /**
   * Budget upsert
   */
  export type BudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The filter to search for the Budget to update in case it exists.
     */
    where: BudgetWhereUniqueInput
    /**
     * In case the Budget found by the `where` argument doesn't exist, create a new Budget with this data.
     */
    create: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
    /**
     * In case the Budget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
  }

  /**
   * Budget delete
   */
  export type BudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter which Budget to delete.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget deleteMany
   */
  export type BudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budgets to delete
     */
    where?: BudgetWhereInput
  }

  /**
   * Budget.categories
   */
  export type Budget$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCategory
     */
    select?: BudgetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetCategoryInclude<ExtArgs> | null
    where?: BudgetCategoryWhereInput
    orderBy?: BudgetCategoryOrderByWithRelationInput | BudgetCategoryOrderByWithRelationInput[]
    cursor?: BudgetCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetCategoryScalarFieldEnum | BudgetCategoryScalarFieldEnum[]
  }

  /**
   * Budget without action
   */
  export type BudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
  }


  /**
   * Model BudgetCategory
   */

  export type AggregateBudgetCategory = {
    _count: BudgetCategoryCountAggregateOutputType | null
    _avg: BudgetCategoryAvgAggregateOutputType | null
    _sum: BudgetCategorySumAggregateOutputType | null
    _min: BudgetCategoryMinAggregateOutputType | null
    _max: BudgetCategoryMaxAggregateOutputType | null
  }

  export type BudgetCategoryAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type BudgetCategorySumAggregateOutputType = {
    amount: Decimal | null
  }

  export type BudgetCategoryMinAggregateOutputType = {
    budgetId: string | null
    categoryId: string | null
    amount: Decimal | null
  }

  export type BudgetCategoryMaxAggregateOutputType = {
    budgetId: string | null
    categoryId: string | null
    amount: Decimal | null
  }

  export type BudgetCategoryCountAggregateOutputType = {
    budgetId: number
    categoryId: number
    amount: number
    _all: number
  }


  export type BudgetCategoryAvgAggregateInputType = {
    amount?: true
  }

  export type BudgetCategorySumAggregateInputType = {
    amount?: true
  }

  export type BudgetCategoryMinAggregateInputType = {
    budgetId?: true
    categoryId?: true
    amount?: true
  }

  export type BudgetCategoryMaxAggregateInputType = {
    budgetId?: true
    categoryId?: true
    amount?: true
  }

  export type BudgetCategoryCountAggregateInputType = {
    budgetId?: true
    categoryId?: true
    amount?: true
    _all?: true
  }

  export type BudgetCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BudgetCategory to aggregate.
     */
    where?: BudgetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetCategories to fetch.
     */
    orderBy?: BudgetCategoryOrderByWithRelationInput | BudgetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BudgetCategories
    **/
    _count?: true | BudgetCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetCategoryMaxAggregateInputType
  }

  export type GetBudgetCategoryAggregateType<T extends BudgetCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBudgetCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudgetCategory[P]>
      : GetScalarType<T[P], AggregateBudgetCategory[P]>
  }




  export type BudgetCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetCategoryWhereInput
    orderBy?: BudgetCategoryOrderByWithAggregationInput | BudgetCategoryOrderByWithAggregationInput[]
    by: BudgetCategoryScalarFieldEnum[] | BudgetCategoryScalarFieldEnum
    having?: BudgetCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetCategoryCountAggregateInputType | true
    _avg?: BudgetCategoryAvgAggregateInputType
    _sum?: BudgetCategorySumAggregateInputType
    _min?: BudgetCategoryMinAggregateInputType
    _max?: BudgetCategoryMaxAggregateInputType
  }

  export type BudgetCategoryGroupByOutputType = {
    budgetId: string
    categoryId: string
    amount: Decimal
    _count: BudgetCategoryCountAggregateOutputType | null
    _avg: BudgetCategoryAvgAggregateOutputType | null
    _sum: BudgetCategorySumAggregateOutputType | null
    _min: BudgetCategoryMinAggregateOutputType | null
    _max: BudgetCategoryMaxAggregateOutputType | null
  }

  type GetBudgetCategoryGroupByPayload<T extends BudgetCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BudgetCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    budgetId?: boolean
    categoryId?: boolean
    amount?: boolean
    budget?: boolean | BudgetDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budgetCategory"]>

  export type BudgetCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    budgetId?: boolean
    categoryId?: boolean
    amount?: boolean
    budget?: boolean | BudgetDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budgetCategory"]>

  export type BudgetCategorySelectScalar = {
    budgetId?: boolean
    categoryId?: boolean
    amount?: boolean
  }

  export type BudgetCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budget?: boolean | BudgetDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type BudgetCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budget?: boolean | BudgetDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $BudgetCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BudgetCategory"
    objects: {
      budget: Prisma.$BudgetPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      budgetId: string
      categoryId: string
      amount: Prisma.Decimal
    }, ExtArgs["result"]["budgetCategory"]>
    composites: {}
  }

  type BudgetCategoryGetPayload<S extends boolean | null | undefined | BudgetCategoryDefaultArgs> = $Result.GetResult<Prisma.$BudgetCategoryPayload, S>

  type BudgetCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BudgetCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BudgetCategoryCountAggregateInputType | true
    }

  export interface BudgetCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BudgetCategory'], meta: { name: 'BudgetCategory' } }
    /**
     * Find zero or one BudgetCategory that matches the filter.
     * @param {BudgetCategoryFindUniqueArgs} args - Arguments to find a BudgetCategory
     * @example
     * // Get one BudgetCategory
     * const budgetCategory = await prisma.budgetCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BudgetCategoryFindUniqueArgs>(args: SelectSubset<T, BudgetCategoryFindUniqueArgs<ExtArgs>>): Prisma__BudgetCategoryClient<$Result.GetResult<Prisma.$BudgetCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BudgetCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BudgetCategoryFindUniqueOrThrowArgs} args - Arguments to find a BudgetCategory
     * @example
     * // Get one BudgetCategory
     * const budgetCategory = await prisma.budgetCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BudgetCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BudgetCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BudgetCategoryClient<$Result.GetResult<Prisma.$BudgetCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BudgetCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCategoryFindFirstArgs} args - Arguments to find a BudgetCategory
     * @example
     * // Get one BudgetCategory
     * const budgetCategory = await prisma.budgetCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BudgetCategoryFindFirstArgs>(args?: SelectSubset<T, BudgetCategoryFindFirstArgs<ExtArgs>>): Prisma__BudgetCategoryClient<$Result.GetResult<Prisma.$BudgetCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BudgetCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCategoryFindFirstOrThrowArgs} args - Arguments to find a BudgetCategory
     * @example
     * // Get one BudgetCategory
     * const budgetCategory = await prisma.budgetCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BudgetCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BudgetCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BudgetCategoryClient<$Result.GetResult<Prisma.$BudgetCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BudgetCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BudgetCategories
     * const budgetCategories = await prisma.budgetCategory.findMany()
     * 
     * // Get first 10 BudgetCategories
     * const budgetCategories = await prisma.budgetCategory.findMany({ take: 10 })
     * 
     * // Only select the `budgetId`
     * const budgetCategoryWithBudgetIdOnly = await prisma.budgetCategory.findMany({ select: { budgetId: true } })
     * 
     */
    findMany<T extends BudgetCategoryFindManyArgs>(args?: SelectSubset<T, BudgetCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BudgetCategory.
     * @param {BudgetCategoryCreateArgs} args - Arguments to create a BudgetCategory.
     * @example
     * // Create one BudgetCategory
     * const BudgetCategory = await prisma.budgetCategory.create({
     *   data: {
     *     // ... data to create a BudgetCategory
     *   }
     * })
     * 
     */
    create<T extends BudgetCategoryCreateArgs>(args: SelectSubset<T, BudgetCategoryCreateArgs<ExtArgs>>): Prisma__BudgetCategoryClient<$Result.GetResult<Prisma.$BudgetCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BudgetCategories.
     * @param {BudgetCategoryCreateManyArgs} args - Arguments to create many BudgetCategories.
     * @example
     * // Create many BudgetCategories
     * const budgetCategory = await prisma.budgetCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BudgetCategoryCreateManyArgs>(args?: SelectSubset<T, BudgetCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BudgetCategories and returns the data saved in the database.
     * @param {BudgetCategoryCreateManyAndReturnArgs} args - Arguments to create many BudgetCategories.
     * @example
     * // Create many BudgetCategories
     * const budgetCategory = await prisma.budgetCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BudgetCategories and only return the `budgetId`
     * const budgetCategoryWithBudgetIdOnly = await prisma.budgetCategory.createManyAndReturn({ 
     *   select: { budgetId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BudgetCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BudgetCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetCategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BudgetCategory.
     * @param {BudgetCategoryDeleteArgs} args - Arguments to delete one BudgetCategory.
     * @example
     * // Delete one BudgetCategory
     * const BudgetCategory = await prisma.budgetCategory.delete({
     *   where: {
     *     // ... filter to delete one BudgetCategory
     *   }
     * })
     * 
     */
    delete<T extends BudgetCategoryDeleteArgs>(args: SelectSubset<T, BudgetCategoryDeleteArgs<ExtArgs>>): Prisma__BudgetCategoryClient<$Result.GetResult<Prisma.$BudgetCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BudgetCategory.
     * @param {BudgetCategoryUpdateArgs} args - Arguments to update one BudgetCategory.
     * @example
     * // Update one BudgetCategory
     * const budgetCategory = await prisma.budgetCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BudgetCategoryUpdateArgs>(args: SelectSubset<T, BudgetCategoryUpdateArgs<ExtArgs>>): Prisma__BudgetCategoryClient<$Result.GetResult<Prisma.$BudgetCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BudgetCategories.
     * @param {BudgetCategoryDeleteManyArgs} args - Arguments to filter BudgetCategories to delete.
     * @example
     * // Delete a few BudgetCategories
     * const { count } = await prisma.budgetCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BudgetCategoryDeleteManyArgs>(args?: SelectSubset<T, BudgetCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BudgetCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BudgetCategories
     * const budgetCategory = await prisma.budgetCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BudgetCategoryUpdateManyArgs>(args: SelectSubset<T, BudgetCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BudgetCategory.
     * @param {BudgetCategoryUpsertArgs} args - Arguments to update or create a BudgetCategory.
     * @example
     * // Update or create a BudgetCategory
     * const budgetCategory = await prisma.budgetCategory.upsert({
     *   create: {
     *     // ... data to create a BudgetCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BudgetCategory we want to update
     *   }
     * })
     */
    upsert<T extends BudgetCategoryUpsertArgs>(args: SelectSubset<T, BudgetCategoryUpsertArgs<ExtArgs>>): Prisma__BudgetCategoryClient<$Result.GetResult<Prisma.$BudgetCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BudgetCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCategoryCountArgs} args - Arguments to filter BudgetCategories to count.
     * @example
     * // Count the number of BudgetCategories
     * const count = await prisma.budgetCategory.count({
     *   where: {
     *     // ... the filter for the BudgetCategories we want to count
     *   }
     * })
    **/
    count<T extends BudgetCategoryCountArgs>(
      args?: Subset<T, BudgetCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BudgetCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BudgetCategoryAggregateArgs>(args: Subset<T, BudgetCategoryAggregateArgs>): Prisma.PrismaPromise<GetBudgetCategoryAggregateType<T>>

    /**
     * Group by BudgetCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BudgetCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BudgetCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BudgetCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BudgetCategory model
   */
  readonly fields: BudgetCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BudgetCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    budget<T extends BudgetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BudgetDefaultArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BudgetCategory model
   */ 
  interface BudgetCategoryFieldRefs {
    readonly budgetId: FieldRef<"BudgetCategory", 'String'>
    readonly categoryId: FieldRef<"BudgetCategory", 'String'>
    readonly amount: FieldRef<"BudgetCategory", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * BudgetCategory findUnique
   */
  export type BudgetCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCategory
     */
    select?: BudgetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BudgetCategory to fetch.
     */
    where: BudgetCategoryWhereUniqueInput
  }

  /**
   * BudgetCategory findUniqueOrThrow
   */
  export type BudgetCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCategory
     */
    select?: BudgetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BudgetCategory to fetch.
     */
    where: BudgetCategoryWhereUniqueInput
  }

  /**
   * BudgetCategory findFirst
   */
  export type BudgetCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCategory
     */
    select?: BudgetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BudgetCategory to fetch.
     */
    where?: BudgetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetCategories to fetch.
     */
    orderBy?: BudgetCategoryOrderByWithRelationInput | BudgetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BudgetCategories.
     */
    cursor?: BudgetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BudgetCategories.
     */
    distinct?: BudgetCategoryScalarFieldEnum | BudgetCategoryScalarFieldEnum[]
  }

  /**
   * BudgetCategory findFirstOrThrow
   */
  export type BudgetCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCategory
     */
    select?: BudgetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BudgetCategory to fetch.
     */
    where?: BudgetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetCategories to fetch.
     */
    orderBy?: BudgetCategoryOrderByWithRelationInput | BudgetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BudgetCategories.
     */
    cursor?: BudgetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BudgetCategories.
     */
    distinct?: BudgetCategoryScalarFieldEnum | BudgetCategoryScalarFieldEnum[]
  }

  /**
   * BudgetCategory findMany
   */
  export type BudgetCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCategory
     */
    select?: BudgetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BudgetCategories to fetch.
     */
    where?: BudgetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetCategories to fetch.
     */
    orderBy?: BudgetCategoryOrderByWithRelationInput | BudgetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BudgetCategories.
     */
    cursor?: BudgetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetCategories.
     */
    skip?: number
    distinct?: BudgetCategoryScalarFieldEnum | BudgetCategoryScalarFieldEnum[]
  }

  /**
   * BudgetCategory create
   */
  export type BudgetCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCategory
     */
    select?: BudgetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BudgetCategory.
     */
    data: XOR<BudgetCategoryCreateInput, BudgetCategoryUncheckedCreateInput>
  }

  /**
   * BudgetCategory createMany
   */
  export type BudgetCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BudgetCategories.
     */
    data: BudgetCategoryCreateManyInput | BudgetCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BudgetCategory createManyAndReturn
   */
  export type BudgetCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCategory
     */
    select?: BudgetCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BudgetCategories.
     */
    data: BudgetCategoryCreateManyInput | BudgetCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BudgetCategory update
   */
  export type BudgetCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCategory
     */
    select?: BudgetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BudgetCategory.
     */
    data: XOR<BudgetCategoryUpdateInput, BudgetCategoryUncheckedUpdateInput>
    /**
     * Choose, which BudgetCategory to update.
     */
    where: BudgetCategoryWhereUniqueInput
  }

  /**
   * BudgetCategory updateMany
   */
  export type BudgetCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BudgetCategories.
     */
    data: XOR<BudgetCategoryUpdateManyMutationInput, BudgetCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BudgetCategories to update
     */
    where?: BudgetCategoryWhereInput
  }

  /**
   * BudgetCategory upsert
   */
  export type BudgetCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCategory
     */
    select?: BudgetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BudgetCategory to update in case it exists.
     */
    where: BudgetCategoryWhereUniqueInput
    /**
     * In case the BudgetCategory found by the `where` argument doesn't exist, create a new BudgetCategory with this data.
     */
    create: XOR<BudgetCategoryCreateInput, BudgetCategoryUncheckedCreateInput>
    /**
     * In case the BudgetCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetCategoryUpdateInput, BudgetCategoryUncheckedUpdateInput>
  }

  /**
   * BudgetCategory delete
   */
  export type BudgetCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCategory
     */
    select?: BudgetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetCategoryInclude<ExtArgs> | null
    /**
     * Filter which BudgetCategory to delete.
     */
    where: BudgetCategoryWhereUniqueInput
  }

  /**
   * BudgetCategory deleteMany
   */
  export type BudgetCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BudgetCategories to delete
     */
    where?: BudgetCategoryWhereInput
  }

  /**
   * BudgetCategory without action
   */
  export type BudgetCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCategory
     */
    select?: BudgetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetCategoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    type: 'type',
    currency: 'currency',
    balance: 'balance',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const StatementScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accountId: 'accountId',
    filename: 'filename',
    fileType: 'fileType',
    uploadedAt: 'uploadedAt',
    processedAt: 'processedAt'
  };

  export type StatementScalarFieldEnum = (typeof StatementScalarFieldEnum)[keyof typeof StatementScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    keywords: 'keywords'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accountId: 'accountId',
    statementId: 'statementId',
    date: 'date',
    description: 'description',
    amount: 'amount',
    type: 'type',
    categoryId: 'categoryId',
    currency: 'currency',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const BudgetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    currency: 'currency',
    totalAmount: 'totalAmount',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    createdAt: 'createdAt'
  };

  export type BudgetScalarFieldEnum = (typeof BudgetScalarFieldEnum)[keyof typeof BudgetScalarFieldEnum]


  export const BudgetCategoryScalarFieldEnum: {
    budgetId: 'budgetId',
    categoryId: 'categoryId',
    amount: 'amount'
  };

  export type BudgetCategoryScalarFieldEnum = (typeof BudgetCategoryScalarFieldEnum)[keyof typeof BudgetCategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'AccountType[]'
   */
  export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>
    


  /**
   * Reference to a field of type 'Currency'
   */
  export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency'>
    


  /**
   * Reference to a field of type 'Currency[]'
   */
  export type ListEnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'FileType'
   */
  export type EnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType'>
    


  /**
   * Reference to a field of type 'FileType[]'
   */
  export type ListEnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType[]'>
    


  /**
   * Reference to a field of type 'CategoryType'
   */
  export type EnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType'>
    


  /**
   * Reference to a field of type 'CategoryType[]'
   */
  export type ListEnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    statements?: StatementListRelationFilter
    transactions?: TransactionListRelationFilter
    budgets?: BudgetListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    statements?: StatementOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    budgets?: BudgetOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    statements?: StatementListRelationFilter
    transactions?: TransactionListRelationFilter
    budgets?: BudgetListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    type?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    currency?: EnumCurrencyFilter<"Account"> | $Enums.Currency
    balance?: DecimalFilter<"Account"> | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFilter<"Account"> | boolean
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
    statements?: StatementListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    balance?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    statements?: StatementOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    type?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    currency?: EnumCurrencyFilter<"Account"> | $Enums.Currency
    balance?: DecimalFilter<"Account"> | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFilter<"Account"> | boolean
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
    statements?: StatementListRelationFilter
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    balance?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    name?: StringWithAggregatesFilter<"Account"> | string
    type?: EnumAccountTypeWithAggregatesFilter<"Account"> | $Enums.AccountType
    currency?: EnumCurrencyWithAggregatesFilter<"Account"> | $Enums.Currency
    balance?: DecimalWithAggregatesFilter<"Account"> | Decimal | DecimalJsLike | number | string
    isDefault?: BoolWithAggregatesFilter<"Account"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type StatementWhereInput = {
    AND?: StatementWhereInput | StatementWhereInput[]
    OR?: StatementWhereInput[]
    NOT?: StatementWhereInput | StatementWhereInput[]
    id?: StringFilter<"Statement"> | string
    userId?: StringFilter<"Statement"> | string
    accountId?: StringFilter<"Statement"> | string
    filename?: StringFilter<"Statement"> | string
    fileType?: EnumFileTypeFilter<"Statement"> | $Enums.FileType
    uploadedAt?: DateTimeFilter<"Statement"> | Date | string
    processedAt?: DateTimeNullableFilter<"Statement"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    account?: XOR<AccountRelationFilter, AccountWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type StatementOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    filename?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type StatementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatementWhereInput | StatementWhereInput[]
    OR?: StatementWhereInput[]
    NOT?: StatementWhereInput | StatementWhereInput[]
    userId?: StringFilter<"Statement"> | string
    accountId?: StringFilter<"Statement"> | string
    filename?: StringFilter<"Statement"> | string
    fileType?: EnumFileTypeFilter<"Statement"> | $Enums.FileType
    uploadedAt?: DateTimeFilter<"Statement"> | Date | string
    processedAt?: DateTimeNullableFilter<"Statement"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    account?: XOR<AccountRelationFilter, AccountWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id">

  export type StatementOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    filename?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    _count?: StatementCountOrderByAggregateInput
    _max?: StatementMaxOrderByAggregateInput
    _min?: StatementMinOrderByAggregateInput
  }

  export type StatementScalarWhereWithAggregatesInput = {
    AND?: StatementScalarWhereWithAggregatesInput | StatementScalarWhereWithAggregatesInput[]
    OR?: StatementScalarWhereWithAggregatesInput[]
    NOT?: StatementScalarWhereWithAggregatesInput | StatementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Statement"> | string
    userId?: StringWithAggregatesFilter<"Statement"> | string
    accountId?: StringWithAggregatesFilter<"Statement"> | string
    filename?: StringWithAggregatesFilter<"Statement"> | string
    fileType?: EnumFileTypeWithAggregatesFilter<"Statement"> | $Enums.FileType
    uploadedAt?: DateTimeWithAggregatesFilter<"Statement"> | Date | string
    processedAt?: DateTimeNullableWithAggregatesFilter<"Statement"> | Date | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    keywords?: StringNullableFilter<"Category"> | string | null
    transactions?: TransactionListRelationFilter
    budgetCategory?: BudgetCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    keywords?: SortOrderInput | SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
    budgetCategory?: BudgetCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    keywords?: StringNullableFilter<"Category"> | string | null
    transactions?: TransactionListRelationFilter
    budgetCategory?: BudgetCategoryListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    keywords?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    type?: EnumCategoryTypeWithAggregatesFilter<"Category"> | $Enums.CategoryType
    keywords?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    accountId?: StringFilter<"Transaction"> | string
    statementId?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    description?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    categoryId?: StringNullableFilter<"Transaction"> | string | null
    currency?: EnumCurrencyFilter<"Transaction"> | $Enums.Currency
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    account?: XOR<AccountRelationFilter, AccountWhereInput>
    statement?: XOR<StatementNullableRelationFilter, StatementWhereInput> | null
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    statementId?: SortOrderInput | SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
    statement?: StatementOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    accountId?: StringFilter<"Transaction"> | string
    statementId?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    description?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    categoryId?: StringNullableFilter<"Transaction"> | string | null
    currency?: EnumCurrencyFilter<"Transaction"> | $Enums.Currency
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    account?: XOR<AccountRelationFilter, AccountWhereInput>
    statement?: XOR<StatementNullableRelationFilter, StatementWhereInput> | null
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    statementId?: SortOrderInput | SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    accountId?: StringWithAggregatesFilter<"Transaction"> | string
    statementId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    description?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    categoryId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    currency?: EnumCurrencyWithAggregatesFilter<"Transaction"> | $Enums.Currency
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type BudgetWhereInput = {
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    id?: StringFilter<"Budget"> | string
    userId?: StringFilter<"Budget"> | string
    name?: StringFilter<"Budget"> | string
    currency?: EnumCurrencyFilter<"Budget"> | $Enums.Currency
    totalAmount?: DecimalFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeFilter<"Budget"> | Date | string
    periodEnd?: DateTimeFilter<"Budget"> | Date | string
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    categories?: BudgetCategoryListRelationFilter
  }

  export type BudgetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    currency?: SortOrder
    totalAmount?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    categories?: BudgetCategoryOrderByRelationAggregateInput
  }

  export type BudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    userId?: StringFilter<"Budget"> | string
    name?: StringFilter<"Budget"> | string
    currency?: EnumCurrencyFilter<"Budget"> | $Enums.Currency
    totalAmount?: DecimalFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeFilter<"Budget"> | Date | string
    periodEnd?: DateTimeFilter<"Budget"> | Date | string
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    categories?: BudgetCategoryListRelationFilter
  }, "id">

  export type BudgetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    currency?: SortOrder
    totalAmount?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    createdAt?: SortOrder
    _count?: BudgetCountOrderByAggregateInput
    _avg?: BudgetAvgOrderByAggregateInput
    _max?: BudgetMaxOrderByAggregateInput
    _min?: BudgetMinOrderByAggregateInput
    _sum?: BudgetSumOrderByAggregateInput
  }

  export type BudgetScalarWhereWithAggregatesInput = {
    AND?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    OR?: BudgetScalarWhereWithAggregatesInput[]
    NOT?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Budget"> | string
    userId?: StringWithAggregatesFilter<"Budget"> | string
    name?: StringWithAggregatesFilter<"Budget"> | string
    currency?: EnumCurrencyWithAggregatesFilter<"Budget"> | $Enums.Currency
    totalAmount?: DecimalWithAggregatesFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
  }

  export type BudgetCategoryWhereInput = {
    AND?: BudgetCategoryWhereInput | BudgetCategoryWhereInput[]
    OR?: BudgetCategoryWhereInput[]
    NOT?: BudgetCategoryWhereInput | BudgetCategoryWhereInput[]
    budgetId?: StringFilter<"BudgetCategory"> | string
    categoryId?: StringFilter<"BudgetCategory"> | string
    amount?: DecimalFilter<"BudgetCategory"> | Decimal | DecimalJsLike | number | string
    budget?: XOR<BudgetRelationFilter, BudgetWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }

  export type BudgetCategoryOrderByWithRelationInput = {
    budgetId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    budget?: BudgetOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type BudgetCategoryWhereUniqueInput = Prisma.AtLeast<{
    budgetId_categoryId?: BudgetCategoryBudgetIdCategoryIdCompoundUniqueInput
    AND?: BudgetCategoryWhereInput | BudgetCategoryWhereInput[]
    OR?: BudgetCategoryWhereInput[]
    NOT?: BudgetCategoryWhereInput | BudgetCategoryWhereInput[]
    budgetId?: StringFilter<"BudgetCategory"> | string
    categoryId?: StringFilter<"BudgetCategory"> | string
    amount?: DecimalFilter<"BudgetCategory"> | Decimal | DecimalJsLike | number | string
    budget?: XOR<BudgetRelationFilter, BudgetWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }, "budgetId_categoryId">

  export type BudgetCategoryOrderByWithAggregationInput = {
    budgetId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    _count?: BudgetCategoryCountOrderByAggregateInput
    _avg?: BudgetCategoryAvgOrderByAggregateInput
    _max?: BudgetCategoryMaxOrderByAggregateInput
    _min?: BudgetCategoryMinOrderByAggregateInput
    _sum?: BudgetCategorySumOrderByAggregateInput
  }

  export type BudgetCategoryScalarWhereWithAggregatesInput = {
    AND?: BudgetCategoryScalarWhereWithAggregatesInput | BudgetCategoryScalarWhereWithAggregatesInput[]
    OR?: BudgetCategoryScalarWhereWithAggregatesInput[]
    NOT?: BudgetCategoryScalarWhereWithAggregatesInput | BudgetCategoryScalarWhereWithAggregatesInput[]
    budgetId?: StringWithAggregatesFilter<"BudgetCategory"> | string
    categoryId?: StringWithAggregatesFilter<"BudgetCategory"> | string
    amount?: DecimalWithAggregatesFilter<"BudgetCategory"> | Decimal | DecimalJsLike | number | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    statements?: StatementCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    statements?: StatementUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    statements?: StatementUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    statements?: StatementUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    name: string
    type: $Enums.AccountType
    currency: $Enums.Currency
    balance: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
    transactions?: TransactionCreateNestedManyWithoutAccountInput
    statements?: StatementCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.AccountType
    currency: $Enums.Currency
    balance: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
    statements?: StatementUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
    statements?: StatementUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
    statements?: StatementUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.AccountType
    currency: $Enums.Currency
    balance: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatementCreateInput = {
    id?: string
    filename: string
    fileType: $Enums.FileType
    uploadedAt?: Date | string
    processedAt?: Date | string | null
    user: UserCreateNestedOneWithoutStatementsInput
    account: AccountCreateNestedOneWithoutStatementsInput
    transactions?: TransactionCreateNestedManyWithoutStatementInput
  }

  export type StatementUncheckedCreateInput = {
    id?: string
    userId: string
    accountId: string
    filename: string
    fileType: $Enums.FileType
    uploadedAt?: Date | string
    processedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutStatementInput
  }

  export type StatementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutStatementsNestedInput
    account?: AccountUpdateOneRequiredWithoutStatementsNestedInput
    transactions?: TransactionUpdateManyWithoutStatementNestedInput
  }

  export type StatementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutStatementNestedInput
  }

  export type StatementCreateManyInput = {
    id?: string
    userId: string
    accountId: string
    filename: string
    fileType: $Enums.FileType
    uploadedAt?: Date | string
    processedAt?: Date | string | null
  }

  export type StatementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StatementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    type?: $Enums.CategoryType
    keywords?: string | null
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    budgetCategory?: BudgetCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    type?: $Enums.CategoryType
    keywords?: string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    budgetCategory?: BudgetCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    budgetCategory?: BudgetCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    budgetCategory?: BudgetCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    type?: $Enums.CategoryType
    keywords?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionCreateInput = {
    id?: string
    date: Date | string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    currency: $Enums.Currency
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    account: AccountCreateNestedOneWithoutTransactionsInput
    statement?: StatementCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    userId: string
    accountId: string
    statementId?: string | null
    date: Date | string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    categoryId?: string | null
    currency: $Enums.Currency
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    account?: AccountUpdateOneRequiredWithoutTransactionsNestedInput
    statement?: StatementUpdateOneWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    statementId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    userId: string
    accountId: string
    statementId?: string | null
    date: Date | string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    categoryId?: string | null
    currency: $Enums.Currency
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    statementId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetCreateInput = {
    id?: string
    name: string
    currency: $Enums.Currency
    totalAmount: Decimal | DecimalJsLike | number | string
    periodStart: Date | string
    periodEnd: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBudgetsInput
    categories?: BudgetCategoryCreateNestedManyWithoutBudgetInput
  }

  export type BudgetUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    currency: $Enums.Currency
    totalAmount: Decimal | DecimalJsLike | number | string
    periodStart: Date | string
    periodEnd: Date | string
    createdAt?: Date | string
    categories?: BudgetCategoryUncheckedCreateNestedManyWithoutBudgetInput
  }

  export type BudgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBudgetsNestedInput
    categories?: BudgetCategoryUpdateManyWithoutBudgetNestedInput
  }

  export type BudgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: BudgetCategoryUncheckedUpdateManyWithoutBudgetNestedInput
  }

  export type BudgetCreateManyInput = {
    id?: string
    userId: string
    name: string
    currency: $Enums.Currency
    totalAmount: Decimal | DecimalJsLike | number | string
    periodStart: Date | string
    periodEnd: Date | string
    createdAt?: Date | string
  }

  export type BudgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetCategoryCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    budget: BudgetCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutBudgetCategoryInput
  }

  export type BudgetCategoryUncheckedCreateInput = {
    budgetId: string
    categoryId: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type BudgetCategoryUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    budget?: BudgetUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutBudgetCategoryNestedInput
  }

  export type BudgetCategoryUncheckedUpdateInput = {
    budgetId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BudgetCategoryCreateManyInput = {
    budgetId: string
    categoryId: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type BudgetCategoryUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BudgetCategoryUncheckedUpdateManyInput = {
    budgetId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type StatementListRelationFilter = {
    every?: StatementWhereInput
    some?: StatementWhereInput
    none?: StatementWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type BudgetListRelationFilter = {
    every?: BudgetWhereInput
    some?: BudgetWhereInput
    none?: BudgetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BudgetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type EnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    balance?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    balance?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    balance?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type EnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeFilter<$PrismaModel> | $Enums.FileType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type StatementCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    filename?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    processedAt?: SortOrder
  }

  export type StatementMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    filename?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    processedAt?: SortOrder
  }

  export type StatementMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    filename?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    processedAt?: SortOrder
  }

  export type EnumFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.FileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypeFilter<$PrismaModel>
    _max?: NestedEnumFileTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type BudgetCategoryListRelationFilter = {
    every?: BudgetCategoryWhereInput
    some?: BudgetCategoryWhereInput
    none?: BudgetCategoryWhereInput
  }

  export type BudgetCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    keywords?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    keywords?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    keywords?: SortOrder
  }

  export type EnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type StatementNullableRelationFilter = {
    is?: StatementWhereInput | null
    isNot?: StatementWhereInput | null
  }

  export type CategoryNullableRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    statementId?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    statementId?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    statementId?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type BudgetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    currency?: SortOrder
    totalAmount?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    createdAt?: SortOrder
  }

  export type BudgetAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type BudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    currency?: SortOrder
    totalAmount?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    createdAt?: SortOrder
  }

  export type BudgetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    currency?: SortOrder
    totalAmount?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    createdAt?: SortOrder
  }

  export type BudgetSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type BudgetRelationFilter = {
    is?: BudgetWhereInput
    isNot?: BudgetWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type BudgetCategoryBudgetIdCategoryIdCompoundUniqueInput = {
    budgetId: string
    categoryId: string
  }

  export type BudgetCategoryCountOrderByAggregateInput = {
    budgetId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
  }

  export type BudgetCategoryAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BudgetCategoryMaxOrderByAggregateInput = {
    budgetId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
  }

  export type BudgetCategoryMinOrderByAggregateInput = {
    budgetId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
  }

  export type BudgetCategorySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type StatementCreateNestedManyWithoutUserInput = {
    create?: XOR<StatementCreateWithoutUserInput, StatementUncheckedCreateWithoutUserInput> | StatementCreateWithoutUserInput[] | StatementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatementCreateOrConnectWithoutUserInput | StatementCreateOrConnectWithoutUserInput[]
    createMany?: StatementCreateManyUserInputEnvelope
    connect?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BudgetCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type StatementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StatementCreateWithoutUserInput, StatementUncheckedCreateWithoutUserInput> | StatementCreateWithoutUserInput[] | StatementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatementCreateOrConnectWithoutUserInput | StatementCreateOrConnectWithoutUserInput[]
    createMany?: StatementCreateManyUserInputEnvelope
    connect?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BudgetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type StatementUpdateManyWithoutUserNestedInput = {
    create?: XOR<StatementCreateWithoutUserInput, StatementUncheckedCreateWithoutUserInput> | StatementCreateWithoutUserInput[] | StatementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatementCreateOrConnectWithoutUserInput | StatementCreateOrConnectWithoutUserInput[]
    upsert?: StatementUpsertWithWhereUniqueWithoutUserInput | StatementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StatementCreateManyUserInputEnvelope
    set?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
    disconnect?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
    delete?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
    connect?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
    update?: StatementUpdateWithWhereUniqueWithoutUserInput | StatementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StatementUpdateManyWithWhereWithoutUserInput | StatementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StatementScalarWhereInput | StatementScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BudgetUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutUserInput | BudgetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutUserInput | BudgetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutUserInput | BudgetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type StatementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StatementCreateWithoutUserInput, StatementUncheckedCreateWithoutUserInput> | StatementCreateWithoutUserInput[] | StatementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatementCreateOrConnectWithoutUserInput | StatementCreateOrConnectWithoutUserInput[]
    upsert?: StatementUpsertWithWhereUniqueWithoutUserInput | StatementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StatementCreateManyUserInputEnvelope
    set?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
    disconnect?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
    delete?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
    connect?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
    update?: StatementUpdateWithWhereUniqueWithoutUserInput | StatementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StatementUpdateManyWithWhereWithoutUserInput | StatementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StatementScalarWhereInput | StatementScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BudgetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutUserInput | BudgetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutUserInput | BudgetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutUserInput | BudgetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutAccountInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StatementCreateNestedManyWithoutAccountInput = {
    create?: XOR<StatementCreateWithoutAccountInput, StatementUncheckedCreateWithoutAccountInput> | StatementCreateWithoutAccountInput[] | StatementUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: StatementCreateOrConnectWithoutAccountInput | StatementCreateOrConnectWithoutAccountInput[]
    createMany?: StatementCreateManyAccountInputEnvelope
    connect?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StatementUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<StatementCreateWithoutAccountInput, StatementUncheckedCreateWithoutAccountInput> | StatementCreateWithoutAccountInput[] | StatementUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: StatementCreateOrConnectWithoutAccountInput | StatementCreateOrConnectWithoutAccountInput[]
    createMany?: StatementCreateManyAccountInputEnvelope
    connect?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.Currency
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type TransactionUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAccountInput | TransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAccountInput | TransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAccountInput | TransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type StatementUpdateManyWithoutAccountNestedInput = {
    create?: XOR<StatementCreateWithoutAccountInput, StatementUncheckedCreateWithoutAccountInput> | StatementCreateWithoutAccountInput[] | StatementUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: StatementCreateOrConnectWithoutAccountInput | StatementCreateOrConnectWithoutAccountInput[]
    upsert?: StatementUpsertWithWhereUniqueWithoutAccountInput | StatementUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: StatementCreateManyAccountInputEnvelope
    set?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
    disconnect?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
    delete?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
    connect?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
    update?: StatementUpdateWithWhereUniqueWithoutAccountInput | StatementUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: StatementUpdateManyWithWhereWithoutAccountInput | StatementUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: StatementScalarWhereInput | StatementScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAccountInput | TransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAccountInput | TransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAccountInput | TransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type StatementUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<StatementCreateWithoutAccountInput, StatementUncheckedCreateWithoutAccountInput> | StatementCreateWithoutAccountInput[] | StatementUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: StatementCreateOrConnectWithoutAccountInput | StatementCreateOrConnectWithoutAccountInput[]
    upsert?: StatementUpsertWithWhereUniqueWithoutAccountInput | StatementUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: StatementCreateManyAccountInputEnvelope
    set?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
    disconnect?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
    delete?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
    connect?: StatementWhereUniqueInput | StatementWhereUniqueInput[]
    update?: StatementUpdateWithWhereUniqueWithoutAccountInput | StatementUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: StatementUpdateManyWithWhereWithoutAccountInput | StatementUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: StatementScalarWhereInput | StatementScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStatementsInput = {
    create?: XOR<UserCreateWithoutStatementsInput, UserUncheckedCreateWithoutStatementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatementsInput
    connect?: UserWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutStatementsInput = {
    create?: XOR<AccountCreateWithoutStatementsInput, AccountUncheckedCreateWithoutStatementsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutStatementsInput
    connect?: AccountWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutStatementInput = {
    create?: XOR<TransactionCreateWithoutStatementInput, TransactionUncheckedCreateWithoutStatementInput> | TransactionCreateWithoutStatementInput[] | TransactionUncheckedCreateWithoutStatementInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutStatementInput | TransactionCreateOrConnectWithoutStatementInput[]
    createMany?: TransactionCreateManyStatementInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutStatementInput = {
    create?: XOR<TransactionCreateWithoutStatementInput, TransactionUncheckedCreateWithoutStatementInput> | TransactionCreateWithoutStatementInput[] | TransactionUncheckedCreateWithoutStatementInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutStatementInput | TransactionCreateOrConnectWithoutStatementInput[]
    createMany?: TransactionCreateManyStatementInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EnumFileTypeFieldUpdateOperationsInput = {
    set?: $Enums.FileType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutStatementsNestedInput = {
    create?: XOR<UserCreateWithoutStatementsInput, UserUncheckedCreateWithoutStatementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatementsInput
    upsert?: UserUpsertWithoutStatementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatementsInput, UserUpdateWithoutStatementsInput>, UserUncheckedUpdateWithoutStatementsInput>
  }

  export type AccountUpdateOneRequiredWithoutStatementsNestedInput = {
    create?: XOR<AccountCreateWithoutStatementsInput, AccountUncheckedCreateWithoutStatementsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutStatementsInput
    upsert?: AccountUpsertWithoutStatementsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutStatementsInput, AccountUpdateWithoutStatementsInput>, AccountUncheckedUpdateWithoutStatementsInput>
  }

  export type TransactionUpdateManyWithoutStatementNestedInput = {
    create?: XOR<TransactionCreateWithoutStatementInput, TransactionUncheckedCreateWithoutStatementInput> | TransactionCreateWithoutStatementInput[] | TransactionUncheckedCreateWithoutStatementInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutStatementInput | TransactionCreateOrConnectWithoutStatementInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutStatementInput | TransactionUpsertWithWhereUniqueWithoutStatementInput[]
    createMany?: TransactionCreateManyStatementInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutStatementInput | TransactionUpdateWithWhereUniqueWithoutStatementInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutStatementInput | TransactionUpdateManyWithWhereWithoutStatementInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutStatementNestedInput = {
    create?: XOR<TransactionCreateWithoutStatementInput, TransactionUncheckedCreateWithoutStatementInput> | TransactionCreateWithoutStatementInput[] | TransactionUncheckedCreateWithoutStatementInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutStatementInput | TransactionCreateOrConnectWithoutStatementInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutStatementInput | TransactionUpsertWithWhereUniqueWithoutStatementInput[]
    createMany?: TransactionCreateManyStatementInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutStatementInput | TransactionUpdateWithWhereUniqueWithoutStatementInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutStatementInput | TransactionUpdateManyWithWhereWithoutStatementInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BudgetCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BudgetCategoryCreateWithoutCategoryInput, BudgetCategoryUncheckedCreateWithoutCategoryInput> | BudgetCategoryCreateWithoutCategoryInput[] | BudgetCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BudgetCategoryCreateOrConnectWithoutCategoryInput | BudgetCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: BudgetCategoryCreateManyCategoryInputEnvelope
    connect?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BudgetCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BudgetCategoryCreateWithoutCategoryInput, BudgetCategoryUncheckedCreateWithoutCategoryInput> | BudgetCategoryCreateWithoutCategoryInput[] | BudgetCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BudgetCategoryCreateOrConnectWithoutCategoryInput | BudgetCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: BudgetCategoryCreateManyCategoryInputEnvelope
    connect?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
  }

  export type EnumCategoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.CategoryType
  }

  export type TransactionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BudgetCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BudgetCategoryCreateWithoutCategoryInput, BudgetCategoryUncheckedCreateWithoutCategoryInput> | BudgetCategoryCreateWithoutCategoryInput[] | BudgetCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BudgetCategoryCreateOrConnectWithoutCategoryInput | BudgetCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: BudgetCategoryUpsertWithWhereUniqueWithoutCategoryInput | BudgetCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BudgetCategoryCreateManyCategoryInputEnvelope
    set?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
    disconnect?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
    delete?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
    connect?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
    update?: BudgetCategoryUpdateWithWhereUniqueWithoutCategoryInput | BudgetCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BudgetCategoryUpdateManyWithWhereWithoutCategoryInput | BudgetCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BudgetCategoryScalarWhereInput | BudgetCategoryScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BudgetCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BudgetCategoryCreateWithoutCategoryInput, BudgetCategoryUncheckedCreateWithoutCategoryInput> | BudgetCategoryCreateWithoutCategoryInput[] | BudgetCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BudgetCategoryCreateOrConnectWithoutCategoryInput | BudgetCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: BudgetCategoryUpsertWithWhereUniqueWithoutCategoryInput | BudgetCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BudgetCategoryCreateManyCategoryInputEnvelope
    set?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
    disconnect?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
    delete?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
    connect?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
    update?: BudgetCategoryUpdateWithWhereUniqueWithoutCategoryInput | BudgetCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BudgetCategoryUpdateManyWithWhereWithoutCategoryInput | BudgetCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BudgetCategoryScalarWhereInput | BudgetCategoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransactionsInput
    connect?: AccountWhereUniqueInput
  }

  export type StatementCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<StatementCreateWithoutTransactionsInput, StatementUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: StatementCreateOrConnectWithoutTransactionsInput
    connect?: StatementWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    connect?: CategoryWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type AccountUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransactionsInput
    upsert?: AccountUpsertWithoutTransactionsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutTransactionsInput, AccountUpdateWithoutTransactionsInput>, AccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type StatementUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<StatementCreateWithoutTransactionsInput, StatementUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: StatementCreateOrConnectWithoutTransactionsInput
    upsert?: StatementUpsertWithoutTransactionsInput
    disconnect?: StatementWhereInput | boolean
    delete?: StatementWhereInput | boolean
    connect?: StatementWhereUniqueInput
    update?: XOR<XOR<StatementUpdateToOneWithWhereWithoutTransactionsInput, StatementUpdateWithoutTransactionsInput>, StatementUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    upsert?: CategoryUpsertWithoutTransactionsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTransactionsInput, CategoryUpdateWithoutTransactionsInput>, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput
    connect?: UserWhereUniqueInput
  }

  export type BudgetCategoryCreateNestedManyWithoutBudgetInput = {
    create?: XOR<BudgetCategoryCreateWithoutBudgetInput, BudgetCategoryUncheckedCreateWithoutBudgetInput> | BudgetCategoryCreateWithoutBudgetInput[] | BudgetCategoryUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: BudgetCategoryCreateOrConnectWithoutBudgetInput | BudgetCategoryCreateOrConnectWithoutBudgetInput[]
    createMany?: BudgetCategoryCreateManyBudgetInputEnvelope
    connect?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
  }

  export type BudgetCategoryUncheckedCreateNestedManyWithoutBudgetInput = {
    create?: XOR<BudgetCategoryCreateWithoutBudgetInput, BudgetCategoryUncheckedCreateWithoutBudgetInput> | BudgetCategoryCreateWithoutBudgetInput[] | BudgetCategoryUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: BudgetCategoryCreateOrConnectWithoutBudgetInput | BudgetCategoryCreateOrConnectWithoutBudgetInput[]
    createMany?: BudgetCategoryCreateManyBudgetInputEnvelope
    connect?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBudgetsNestedInput = {
    create?: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput
    upsert?: UserUpsertWithoutBudgetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBudgetsInput, UserUpdateWithoutBudgetsInput>, UserUncheckedUpdateWithoutBudgetsInput>
  }

  export type BudgetCategoryUpdateManyWithoutBudgetNestedInput = {
    create?: XOR<BudgetCategoryCreateWithoutBudgetInput, BudgetCategoryUncheckedCreateWithoutBudgetInput> | BudgetCategoryCreateWithoutBudgetInput[] | BudgetCategoryUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: BudgetCategoryCreateOrConnectWithoutBudgetInput | BudgetCategoryCreateOrConnectWithoutBudgetInput[]
    upsert?: BudgetCategoryUpsertWithWhereUniqueWithoutBudgetInput | BudgetCategoryUpsertWithWhereUniqueWithoutBudgetInput[]
    createMany?: BudgetCategoryCreateManyBudgetInputEnvelope
    set?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
    disconnect?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
    delete?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
    connect?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
    update?: BudgetCategoryUpdateWithWhereUniqueWithoutBudgetInput | BudgetCategoryUpdateWithWhereUniqueWithoutBudgetInput[]
    updateMany?: BudgetCategoryUpdateManyWithWhereWithoutBudgetInput | BudgetCategoryUpdateManyWithWhereWithoutBudgetInput[]
    deleteMany?: BudgetCategoryScalarWhereInput | BudgetCategoryScalarWhereInput[]
  }

  export type BudgetCategoryUncheckedUpdateManyWithoutBudgetNestedInput = {
    create?: XOR<BudgetCategoryCreateWithoutBudgetInput, BudgetCategoryUncheckedCreateWithoutBudgetInput> | BudgetCategoryCreateWithoutBudgetInput[] | BudgetCategoryUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: BudgetCategoryCreateOrConnectWithoutBudgetInput | BudgetCategoryCreateOrConnectWithoutBudgetInput[]
    upsert?: BudgetCategoryUpsertWithWhereUniqueWithoutBudgetInput | BudgetCategoryUpsertWithWhereUniqueWithoutBudgetInput[]
    createMany?: BudgetCategoryCreateManyBudgetInputEnvelope
    set?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
    disconnect?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
    delete?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
    connect?: BudgetCategoryWhereUniqueInput | BudgetCategoryWhereUniqueInput[]
    update?: BudgetCategoryUpdateWithWhereUniqueWithoutBudgetInput | BudgetCategoryUpdateWithWhereUniqueWithoutBudgetInput[]
    updateMany?: BudgetCategoryUpdateManyWithWhereWithoutBudgetInput | BudgetCategoryUpdateManyWithWhereWithoutBudgetInput[]
    deleteMany?: BudgetCategoryScalarWhereInput | BudgetCategoryScalarWhereInput[]
  }

  export type BudgetCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<BudgetCreateWithoutCategoriesInput, BudgetUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoriesInput
    connect?: BudgetWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutBudgetCategoryInput = {
    create?: XOR<CategoryCreateWithoutBudgetCategoryInput, CategoryUncheckedCreateWithoutBudgetCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBudgetCategoryInput
    connect?: CategoryWhereUniqueInput
  }

  export type BudgetUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<BudgetCreateWithoutCategoriesInput, BudgetUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoriesInput
    upsert?: BudgetUpsertWithoutCategoriesInput
    connect?: BudgetWhereUniqueInput
    update?: XOR<XOR<BudgetUpdateToOneWithWhereWithoutCategoriesInput, BudgetUpdateWithoutCategoriesInput>, BudgetUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutBudgetCategoryNestedInput = {
    create?: XOR<CategoryCreateWithoutBudgetCategoryInput, CategoryUncheckedCreateWithoutBudgetCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBudgetCategoryInput
    upsert?: CategoryUpsertWithoutBudgetCategoryInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBudgetCategoryInput, CategoryUpdateWithoutBudgetCategoryInput>, CategoryUncheckedUpdateWithoutBudgetCategoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type NestedEnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeFilter<$PrismaModel> | $Enums.FileType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.FileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypeFilter<$PrismaModel>
    _max?: NestedEnumFileTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    name: string
    type: $Enums.AccountType
    currency: $Enums.Currency
    balance: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutAccountInput
    statements?: StatementCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    type: $Enums.AccountType
    currency: $Enums.Currency
    balance: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
    statements?: StatementUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StatementCreateWithoutUserInput = {
    id?: string
    filename: string
    fileType: $Enums.FileType
    uploadedAt?: Date | string
    processedAt?: Date | string | null
    account: AccountCreateNestedOneWithoutStatementsInput
    transactions?: TransactionCreateNestedManyWithoutStatementInput
  }

  export type StatementUncheckedCreateWithoutUserInput = {
    id?: string
    accountId: string
    filename: string
    fileType: $Enums.FileType
    uploadedAt?: Date | string
    processedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutStatementInput
  }

  export type StatementCreateOrConnectWithoutUserInput = {
    where: StatementWhereUniqueInput
    create: XOR<StatementCreateWithoutUserInput, StatementUncheckedCreateWithoutUserInput>
  }

  export type StatementCreateManyUserInputEnvelope = {
    data: StatementCreateManyUserInput | StatementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    date: Date | string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    currency: $Enums.Currency
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutTransactionsInput
    statement?: StatementCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    accountId: string
    statementId?: string | null
    date: Date | string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    categoryId?: string | null
    currency: $Enums.Currency
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BudgetCreateWithoutUserInput = {
    id?: string
    name: string
    currency: $Enums.Currency
    totalAmount: Decimal | DecimalJsLike | number | string
    periodStart: Date | string
    periodEnd: Date | string
    createdAt?: Date | string
    categories?: BudgetCategoryCreateNestedManyWithoutBudgetInput
  }

  export type BudgetUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    currency: $Enums.Currency
    totalAmount: Decimal | DecimalJsLike | number | string
    periodStart: Date | string
    periodEnd: Date | string
    createdAt?: Date | string
    categories?: BudgetCategoryUncheckedCreateNestedManyWithoutBudgetInput
  }

  export type BudgetCreateOrConnectWithoutUserInput = {
    where: BudgetWhereUniqueInput
    create: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput>
  }

  export type BudgetCreateManyUserInputEnvelope = {
    data: BudgetCreateManyUserInput | BudgetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    type?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    currency?: EnumCurrencyFilter<"Account"> | $Enums.Currency
    balance?: DecimalFilter<"Account"> | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFilter<"Account"> | boolean
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type StatementUpsertWithWhereUniqueWithoutUserInput = {
    where: StatementWhereUniqueInput
    update: XOR<StatementUpdateWithoutUserInput, StatementUncheckedUpdateWithoutUserInput>
    create: XOR<StatementCreateWithoutUserInput, StatementUncheckedCreateWithoutUserInput>
  }

  export type StatementUpdateWithWhereUniqueWithoutUserInput = {
    where: StatementWhereUniqueInput
    data: XOR<StatementUpdateWithoutUserInput, StatementUncheckedUpdateWithoutUserInput>
  }

  export type StatementUpdateManyWithWhereWithoutUserInput = {
    where: StatementScalarWhereInput
    data: XOR<StatementUpdateManyMutationInput, StatementUncheckedUpdateManyWithoutUserInput>
  }

  export type StatementScalarWhereInput = {
    AND?: StatementScalarWhereInput | StatementScalarWhereInput[]
    OR?: StatementScalarWhereInput[]
    NOT?: StatementScalarWhereInput | StatementScalarWhereInput[]
    id?: StringFilter<"Statement"> | string
    userId?: StringFilter<"Statement"> | string
    accountId?: StringFilter<"Statement"> | string
    filename?: StringFilter<"Statement"> | string
    fileType?: EnumFileTypeFilter<"Statement"> | $Enums.FileType
    uploadedAt?: DateTimeFilter<"Statement"> | Date | string
    processedAt?: DateTimeNullableFilter<"Statement"> | Date | string | null
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    accountId?: StringFilter<"Transaction"> | string
    statementId?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    description?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    categoryId?: StringNullableFilter<"Transaction"> | string | null
    currency?: EnumCurrencyFilter<"Transaction"> | $Enums.Currency
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type BudgetUpsertWithWhereUniqueWithoutUserInput = {
    where: BudgetWhereUniqueInput
    update: XOR<BudgetUpdateWithoutUserInput, BudgetUncheckedUpdateWithoutUserInput>
    create: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput>
  }

  export type BudgetUpdateWithWhereUniqueWithoutUserInput = {
    where: BudgetWhereUniqueInput
    data: XOR<BudgetUpdateWithoutUserInput, BudgetUncheckedUpdateWithoutUserInput>
  }

  export type BudgetUpdateManyWithWhereWithoutUserInput = {
    where: BudgetScalarWhereInput
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyWithoutUserInput>
  }

  export type BudgetScalarWhereInput = {
    AND?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    OR?: BudgetScalarWhereInput[]
    NOT?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    id?: StringFilter<"Budget"> | string
    userId?: StringFilter<"Budget"> | string
    name?: StringFilter<"Budget"> | string
    currency?: EnumCurrencyFilter<"Budget"> | $Enums.Currency
    totalAmount?: DecimalFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeFilter<"Budget"> | Date | string
    periodEnd?: DateTimeFilter<"Budget"> | Date | string
    createdAt?: DateTimeFilter<"Budget"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    statements?: StatementCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    statements?: StatementUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type TransactionCreateWithoutAccountInput = {
    id?: string
    date: Date | string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    currency: $Enums.Currency
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    statement?: StatementCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutAccountInput = {
    id?: string
    userId: string
    statementId?: string | null
    date: Date | string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    categoryId?: string | null
    currency: $Enums.Currency
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput>
  }

  export type TransactionCreateManyAccountInputEnvelope = {
    data: TransactionCreateManyAccountInput | TransactionCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type StatementCreateWithoutAccountInput = {
    id?: string
    filename: string
    fileType: $Enums.FileType
    uploadedAt?: Date | string
    processedAt?: Date | string | null
    user: UserCreateNestedOneWithoutStatementsInput
    transactions?: TransactionCreateNestedManyWithoutStatementInput
  }

  export type StatementUncheckedCreateWithoutAccountInput = {
    id?: string
    userId: string
    filename: string
    fileType: $Enums.FileType
    uploadedAt?: Date | string
    processedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutStatementInput
  }

  export type StatementCreateOrConnectWithoutAccountInput = {
    where: StatementWhereUniqueInput
    create: XOR<StatementCreateWithoutAccountInput, StatementUncheckedCreateWithoutAccountInput>
  }

  export type StatementCreateManyAccountInputEnvelope = {
    data: StatementCreateManyAccountInput | StatementCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statements?: StatementUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statements?: StatementUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutAccountInput, TransactionUncheckedUpdateWithoutAccountInput>
    create: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutAccountInput, TransactionUncheckedUpdateWithoutAccountInput>
  }

  export type TransactionUpdateManyWithWhereWithoutAccountInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutAccountInput>
  }

  export type StatementUpsertWithWhereUniqueWithoutAccountInput = {
    where: StatementWhereUniqueInput
    update: XOR<StatementUpdateWithoutAccountInput, StatementUncheckedUpdateWithoutAccountInput>
    create: XOR<StatementCreateWithoutAccountInput, StatementUncheckedCreateWithoutAccountInput>
  }

  export type StatementUpdateWithWhereUniqueWithoutAccountInput = {
    where: StatementWhereUniqueInput
    data: XOR<StatementUpdateWithoutAccountInput, StatementUncheckedUpdateWithoutAccountInput>
  }

  export type StatementUpdateManyWithWhereWithoutAccountInput = {
    where: StatementScalarWhereInput
    data: XOR<StatementUpdateManyMutationInput, StatementUncheckedUpdateManyWithoutAccountInput>
  }

  export type UserCreateWithoutStatementsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStatementsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStatementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatementsInput, UserUncheckedCreateWithoutStatementsInput>
  }

  export type AccountCreateWithoutStatementsInput = {
    id?: string
    name: string
    type: $Enums.AccountType
    currency: $Enums.Currency
    balance: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
    transactions?: TransactionCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutStatementsInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.AccountType
    currency: $Enums.Currency
    balance: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutStatementsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutStatementsInput, AccountUncheckedCreateWithoutStatementsInput>
  }

  export type TransactionCreateWithoutStatementInput = {
    id?: string
    date: Date | string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    currency: $Enums.Currency
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    account: AccountCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutStatementInput = {
    id?: string
    userId: string
    accountId: string
    date: Date | string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    categoryId?: string | null
    currency: $Enums.Currency
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutStatementInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutStatementInput, TransactionUncheckedCreateWithoutStatementInput>
  }

  export type TransactionCreateManyStatementInputEnvelope = {
    data: TransactionCreateManyStatementInput | TransactionCreateManyStatementInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStatementsInput = {
    update: XOR<UserUpdateWithoutStatementsInput, UserUncheckedUpdateWithoutStatementsInput>
    create: XOR<UserCreateWithoutStatementsInput, UserUncheckedCreateWithoutStatementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatementsInput, UserUncheckedUpdateWithoutStatementsInput>
  }

  export type UserUpdateWithoutStatementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStatementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountUpsertWithoutStatementsInput = {
    update: XOR<AccountUpdateWithoutStatementsInput, AccountUncheckedUpdateWithoutStatementsInput>
    create: XOR<AccountCreateWithoutStatementsInput, AccountUncheckedCreateWithoutStatementsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutStatementsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutStatementsInput, AccountUncheckedUpdateWithoutStatementsInput>
  }

  export type AccountUpdateWithoutStatementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutStatementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutStatementInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutStatementInput, TransactionUncheckedUpdateWithoutStatementInput>
    create: XOR<TransactionCreateWithoutStatementInput, TransactionUncheckedCreateWithoutStatementInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutStatementInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutStatementInput, TransactionUncheckedUpdateWithoutStatementInput>
  }

  export type TransactionUpdateManyWithWhereWithoutStatementInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutStatementInput>
  }

  export type TransactionCreateWithoutCategoryInput = {
    id?: string
    date: Date | string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    currency: $Enums.Currency
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    account: AccountCreateNestedOneWithoutTransactionsInput
    statement?: StatementCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutCategoryInput = {
    id?: string
    userId: string
    accountId: string
    statementId?: string | null
    date: Date | string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    currency: $Enums.Currency
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionCreateManyCategoryInputEnvelope = {
    data: TransactionCreateManyCategoryInput | TransactionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BudgetCategoryCreateWithoutCategoryInput = {
    amount: Decimal | DecimalJsLike | number | string
    budget: BudgetCreateNestedOneWithoutCategoriesInput
  }

  export type BudgetCategoryUncheckedCreateWithoutCategoryInput = {
    budgetId: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type BudgetCategoryCreateOrConnectWithoutCategoryInput = {
    where: BudgetCategoryWhereUniqueInput
    create: XOR<BudgetCategoryCreateWithoutCategoryInput, BudgetCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type BudgetCategoryCreateManyCategoryInputEnvelope = {
    data: BudgetCategoryCreateManyCategoryInput | BudgetCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCategoryInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BudgetCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BudgetCategoryWhereUniqueInput
    update: XOR<BudgetCategoryUpdateWithoutCategoryInput, BudgetCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<BudgetCategoryCreateWithoutCategoryInput, BudgetCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type BudgetCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BudgetCategoryWhereUniqueInput
    data: XOR<BudgetCategoryUpdateWithoutCategoryInput, BudgetCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type BudgetCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: BudgetCategoryScalarWhereInput
    data: XOR<BudgetCategoryUpdateManyMutationInput, BudgetCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BudgetCategoryScalarWhereInput = {
    AND?: BudgetCategoryScalarWhereInput | BudgetCategoryScalarWhereInput[]
    OR?: BudgetCategoryScalarWhereInput[]
    NOT?: BudgetCategoryScalarWhereInput | BudgetCategoryScalarWhereInput[]
    budgetId?: StringFilter<"BudgetCategory"> | string
    categoryId?: StringFilter<"BudgetCategory"> | string
    amount?: DecimalFilter<"BudgetCategory"> | Decimal | DecimalJsLike | number | string
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    statements?: StatementCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    statements?: StatementUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type AccountCreateWithoutTransactionsInput = {
    id?: string
    name: string
    type: $Enums.AccountType
    currency: $Enums.Currency
    balance: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
    statements?: StatementCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutTransactionsInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.AccountType
    currency: $Enums.Currency
    balance: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    statements?: StatementUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutTransactionsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
  }

  export type StatementCreateWithoutTransactionsInput = {
    id?: string
    filename: string
    fileType: $Enums.FileType
    uploadedAt?: Date | string
    processedAt?: Date | string | null
    user: UserCreateNestedOneWithoutStatementsInput
    account: AccountCreateNestedOneWithoutStatementsInput
  }

  export type StatementUncheckedCreateWithoutTransactionsInput = {
    id?: string
    userId: string
    accountId: string
    filename: string
    fileType: $Enums.FileType
    uploadedAt?: Date | string
    processedAt?: Date | string | null
  }

  export type StatementCreateOrConnectWithoutTransactionsInput = {
    where: StatementWhereUniqueInput
    create: XOR<StatementCreateWithoutTransactionsInput, StatementUncheckedCreateWithoutTransactionsInput>
  }

  export type CategoryCreateWithoutTransactionsInput = {
    id?: string
    name: string
    type?: $Enums.CategoryType
    keywords?: string | null
    budgetCategory?: BudgetCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    type?: $Enums.CategoryType
    keywords?: string | null
    budgetCategory?: BudgetCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTransactionsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    statements?: StatementUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    statements?: StatementUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountUpsertWithoutTransactionsInput = {
    update: XOR<AccountUpdateWithoutTransactionsInput, AccountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutTransactionsInput, AccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type AccountUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    statements?: StatementUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statements?: StatementUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type StatementUpsertWithoutTransactionsInput = {
    update: XOR<StatementUpdateWithoutTransactionsInput, StatementUncheckedUpdateWithoutTransactionsInput>
    create: XOR<StatementCreateWithoutTransactionsInput, StatementUncheckedCreateWithoutTransactionsInput>
    where?: StatementWhereInput
  }

  export type StatementUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: StatementWhereInput
    data: XOR<StatementUpdateWithoutTransactionsInput, StatementUncheckedUpdateWithoutTransactionsInput>
  }

  export type StatementUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutStatementsNestedInput
    account?: AccountUpdateOneRequiredWithoutStatementsNestedInput
  }

  export type StatementUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUpsertWithoutTransactionsInput = {
    update: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    budgetCategory?: BudgetCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    budgetCategory?: BudgetCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserCreateWithoutBudgetsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    statements?: StatementCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBudgetsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    statements?: StatementUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBudgetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
  }

  export type BudgetCategoryCreateWithoutBudgetInput = {
    amount: Decimal | DecimalJsLike | number | string
    category: CategoryCreateNestedOneWithoutBudgetCategoryInput
  }

  export type BudgetCategoryUncheckedCreateWithoutBudgetInput = {
    categoryId: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type BudgetCategoryCreateOrConnectWithoutBudgetInput = {
    where: BudgetCategoryWhereUniqueInput
    create: XOR<BudgetCategoryCreateWithoutBudgetInput, BudgetCategoryUncheckedCreateWithoutBudgetInput>
  }

  export type BudgetCategoryCreateManyBudgetInputEnvelope = {
    data: BudgetCategoryCreateManyBudgetInput | BudgetCategoryCreateManyBudgetInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBudgetsInput = {
    update: XOR<UserUpdateWithoutBudgetsInput, UserUncheckedUpdateWithoutBudgetsInput>
    create: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBudgetsInput, UserUncheckedUpdateWithoutBudgetsInput>
  }

  export type UserUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    statements?: StatementUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    statements?: StatementUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BudgetCategoryUpsertWithWhereUniqueWithoutBudgetInput = {
    where: BudgetCategoryWhereUniqueInput
    update: XOR<BudgetCategoryUpdateWithoutBudgetInput, BudgetCategoryUncheckedUpdateWithoutBudgetInput>
    create: XOR<BudgetCategoryCreateWithoutBudgetInput, BudgetCategoryUncheckedCreateWithoutBudgetInput>
  }

  export type BudgetCategoryUpdateWithWhereUniqueWithoutBudgetInput = {
    where: BudgetCategoryWhereUniqueInput
    data: XOR<BudgetCategoryUpdateWithoutBudgetInput, BudgetCategoryUncheckedUpdateWithoutBudgetInput>
  }

  export type BudgetCategoryUpdateManyWithWhereWithoutBudgetInput = {
    where: BudgetCategoryScalarWhereInput
    data: XOR<BudgetCategoryUpdateManyMutationInput, BudgetCategoryUncheckedUpdateManyWithoutBudgetInput>
  }

  export type BudgetCreateWithoutCategoriesInput = {
    id?: string
    name: string
    currency: $Enums.Currency
    totalAmount: Decimal | DecimalJsLike | number | string
    periodStart: Date | string
    periodEnd: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetUncheckedCreateWithoutCategoriesInput = {
    id?: string
    userId: string
    name: string
    currency: $Enums.Currency
    totalAmount: Decimal | DecimalJsLike | number | string
    periodStart: Date | string
    periodEnd: Date | string
    createdAt?: Date | string
  }

  export type BudgetCreateOrConnectWithoutCategoriesInput = {
    where: BudgetWhereUniqueInput
    create: XOR<BudgetCreateWithoutCategoriesInput, BudgetUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutBudgetCategoryInput = {
    id?: string
    name: string
    type?: $Enums.CategoryType
    keywords?: string | null
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBudgetCategoryInput = {
    id?: string
    name: string
    type?: $Enums.CategoryType
    keywords?: string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBudgetCategoryInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBudgetCategoryInput, CategoryUncheckedCreateWithoutBudgetCategoryInput>
  }

  export type BudgetUpsertWithoutCategoriesInput = {
    update: XOR<BudgetUpdateWithoutCategoriesInput, BudgetUncheckedUpdateWithoutCategoriesInput>
    create: XOR<BudgetCreateWithoutCategoriesInput, BudgetUncheckedCreateWithoutCategoriesInput>
    where?: BudgetWhereInput
  }

  export type BudgetUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: BudgetWhereInput
    data: XOR<BudgetUpdateWithoutCategoriesInput, BudgetUncheckedUpdateWithoutCategoriesInput>
  }

  export type BudgetUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type BudgetUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithoutBudgetCategoryInput = {
    update: XOR<CategoryUpdateWithoutBudgetCategoryInput, CategoryUncheckedUpdateWithoutBudgetCategoryInput>
    create: XOR<CategoryCreateWithoutBudgetCategoryInput, CategoryUncheckedCreateWithoutBudgetCategoryInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBudgetCategoryInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBudgetCategoryInput, CategoryUncheckedUpdateWithoutBudgetCategoryInput>
  }

  export type CategoryUpdateWithoutBudgetCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBudgetCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    name: string
    type: $Enums.AccountType
    currency: $Enums.Currency
    balance: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StatementCreateManyUserInput = {
    id?: string
    accountId: string
    filename: string
    fileType: $Enums.FileType
    uploadedAt?: Date | string
    processedAt?: Date | string | null
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    accountId: string
    statementId?: string | null
    date: Date | string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    categoryId?: string | null
    currency: $Enums.Currency
    createdAt?: Date | string
  }

  export type BudgetCreateManyUserInput = {
    id?: string
    name: string
    currency: $Enums.Currency
    totalAmount: Decimal | DecimalJsLike | number | string
    periodStart: Date | string
    periodEnd: Date | string
    createdAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
    statements?: StatementUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
    statements?: StatementUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: AccountUpdateOneRequiredWithoutStatementsNestedInput
    transactions?: TransactionUpdateManyWithoutStatementNestedInput
  }

  export type StatementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutStatementNestedInput
  }

  export type StatementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutTransactionsNestedInput
    statement?: StatementUpdateOneWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    statementId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    statementId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: BudgetCategoryUpdateManyWithoutBudgetNestedInput
  }

  export type BudgetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: BudgetCategoryUncheckedUpdateManyWithoutBudgetNestedInput
  }

  export type BudgetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyAccountInput = {
    id?: string
    userId: string
    statementId?: string | null
    date: Date | string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    categoryId?: string | null
    currency: $Enums.Currency
    createdAt?: Date | string
  }

  export type StatementCreateManyAccountInput = {
    id?: string
    userId: string
    filename: string
    fileType: $Enums.FileType
    uploadedAt?: Date | string
    processedAt?: Date | string | null
  }

  export type TransactionUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    statement?: StatementUpdateOneWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    statementId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    statementId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatementUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutStatementsNestedInput
    transactions?: TransactionUpdateManyWithoutStatementNestedInput
  }

  export type StatementUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutStatementNestedInput
  }

  export type StatementUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateManyStatementInput = {
    id?: string
    userId: string
    accountId: string
    date: Date | string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    categoryId?: string | null
    currency: $Enums.Currency
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutStatementInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    account?: AccountUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutStatementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutStatementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyCategoryInput = {
    id?: string
    userId: string
    accountId: string
    statementId?: string | null
    date: Date | string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    currency: $Enums.Currency
    createdAt?: Date | string
  }

  export type BudgetCategoryCreateManyCategoryInput = {
    budgetId: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type TransactionUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    account?: AccountUpdateOneRequiredWithoutTransactionsNestedInput
    statement?: StatementUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    statementId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    statementId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetCategoryUpdateWithoutCategoryInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    budget?: BudgetUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type BudgetCategoryUncheckedUpdateWithoutCategoryInput = {
    budgetId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BudgetCategoryUncheckedUpdateManyWithoutCategoryInput = {
    budgetId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BudgetCategoryCreateManyBudgetInput = {
    categoryId: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type BudgetCategoryUpdateWithoutBudgetInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: CategoryUpdateOneRequiredWithoutBudgetCategoryNestedInput
  }

  export type BudgetCategoryUncheckedUpdateWithoutBudgetInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BudgetCategoryUncheckedUpdateManyWithoutBudgetInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountCountOutputTypeDefaultArgs instead
     */
    export type AccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatementCountOutputTypeDefaultArgs instead
     */
    export type StatementCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatementCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BudgetCountOutputTypeDefaultArgs instead
     */
    export type BudgetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BudgetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatementDefaultArgs instead
     */
    export type StatementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BudgetDefaultArgs instead
     */
    export type BudgetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BudgetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BudgetCategoryDefaultArgs instead
     */
    export type BudgetCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BudgetCategoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}