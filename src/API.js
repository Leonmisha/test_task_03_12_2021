import algoliasearch from 'algoliasearch'

const applicationID = 'OFCNCOG2CU'
const apiKey = 'f54e21fa3a2a0160595bb058179bfb1e'
const algolia = algoliasearch(applicationID, apiKey, { protocol: 'https:' })
const algoliaIndex = algolia.initIndex('npm-search')

const QUERY_REGEXP = /^((?:(?:[^\s:]+(?![a-z]*\s*:))\s*)*)/i

const stdOptionsSearch = {
  attributesToHighlight: [],
  attributesToRetrieve: ['description', 'homepage', 'keywords', 'license', 'name', 'owner', 'version'],
  analyticsTags: ['jsdelivr']
}

const API = {
  getListSearch (queryString, page = 0, hitsPerPage = 10) {
    const query = queryString.match(QUERY_REGEXP)[0].trim()
    const options = { ...stdOptionsSearch, page, hitsPerPage }
    return algoliaIndex.search(query, options)
  }
}

export default API
