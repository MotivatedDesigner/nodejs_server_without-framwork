import mysqlAdapter from "./mysql/mysql_adapter.js"
import { fakeTask } from "../../../__test__/index.js"

const databaseAdapter = mysqlAdapter()

const test = async () => {
  const result = await databaseAdapter.remove('testId')
  console.log(result)
}
test()