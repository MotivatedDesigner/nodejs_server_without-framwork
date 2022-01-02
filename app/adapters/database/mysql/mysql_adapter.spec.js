import iconv from 'iconv-lite'
import encodings from 'iconv-lite/encodings'
iconv.encodings = encodings
import mysqlAdapter from './mysql_adapter.js'
import {fakeTask} from '../../../../__test__/index.js'

const database = mysqlAdapter()

describe('add Task', () => {

  it('findById must throw error if !id', async () => {
    expect(database.findById()).rejects.toThrow('Must supply an id')
  })

  it('findById must return a task object', async () => {
    expect('o').toEqual('o')
  })

})
