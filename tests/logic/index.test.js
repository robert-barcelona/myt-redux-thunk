const moxios = require('moxios')
const tape = require('tape');
const _test = require('tape-promise').default;
const test = _test(tape)
const logic = require('../../logic')
const APIError = require('../../logic/APIError')

const {fakeMovieData, fakeGenreData, fakeMovieDetailData} = require('./fakeData')

test('getMovies should throw error with null genre', async (t) => {
  await t.rejects( logic.logicGetMovies(null, 1), APIError)
})

test('getMovies should throw error with undefined genre', async (t) => {
  await t.rejects( logic.logicGetMovies(undefined, 1), APIError)
})


test('getMovies should throw error with empty string genre', async (t) => {
  await t.rejects( logic.logicGetMovies('', 1), APIError)
})


test('getMovies should throw error with  string genre', async (t) => {
  await t.rejects( logic.logicGetMovies('abc', 1), APIError)
})

test('getMovies should throw error with array genre', async (t) => {
  await t.rejects( logic.logicGetMovies([], 1), APIError)
})


test('getMovies should throw error with object genre', async (t) => {
  await t.rejects( logic.logicGetMovies({}, 1), APIError)
})


test('getMovies should throw error with null page', async (t) => {
  await t.rejects( logic.logicGetMovies(12345, null), APIError)
})


test('getMovies should throw error with undefined page', async (t) => {
  await t.rejects( logic.logicGetMovies(13234, undefined), APIError)
})

test('getMovies should throw error with empty string page', async (t) => {
  await t.rejects( logic.logicGetMovies(23423, ''), APIError)
})


test('getMovies should throw error with  string page', async (t) => {
  await t.rejects( logic.logicGetMovies(234234, 'sdasd'), APIError)
})

test('getMovies should throw error with array page', async (t) => {
  await t.rejects( logic.logicGetMovies(2343, []), APIError)
})

test('getMovies should throw error with object page', async (t) => {
  await t.rejects( logic.logicGetMovies(234234, {}), APIError)
})

test('getMovies should succeed with correct genre and page', async (t) => {
  moxios.install()

  moxios.wait(() => {
    const request = moxios.requests.mostRecent()
    request.respondWith({ status: 200, response: fakeMovieData }) //mocked response
  })

 const results = await logic.logicGetMovies(28, 1)
  moxios.uninstall()
  t.deepEqual(results.data,fakeMovieData)

})



test('getGenres should succeed', async (t) => {
  moxios.install()

  moxios.wait(() => {
    const request = moxios.requests.mostRecent()
    request.respondWith({ status: 200, response: fakeGenreData }) //mocked response
  })

  const results = await logic.logicGetGenres()
  moxios.uninstall()
  t.deepEqual(results.data,fakeGenreData)

})



test('getMovieDetail should throw error with null id', async (t) => {
  await t.rejects( logic.logicGetMovieDetail(null), APIError)
})

test('getMovieDetail should throw error with undefined id', async (t) => {
  await t.rejects( logic.logicGetMovieDetail(undefined), APIError)
})


test('getMovieDetail should throw error with empty string id', async (t) => {
  await t.rejects( logic.logicGetMovieDetail(''), APIError)
})


test('getMovieDetail should throw error with  string id', async (t) => {
  await t.rejects( logic.logicGetMovieDetail('abc'), APIError)
})

test('getMovieDetail should throw error with array id', async (t) => {
  await t.rejects( logic.logicGetMovieDetail([]), APIError)
})


test('getMovieDetail should throw error with object id', async (t) => {
  await t.rejects( logic.logicGetMovieDetail({}), APIError)
})



test('getMovieDetail should succeed with correct id', async (t) => {
  moxios.install()

  moxios.wait(() => {
    const request = moxios.requests.mostRecent()
    request.respondWith({ status: 200, response: fakeMovieDetailData }) //mocked response
  })

  const results = await logic.logicGetGenres(5232)
  moxios.uninstall()
  t.deepEqual(results.data,fakeMovieDetailData)

})

