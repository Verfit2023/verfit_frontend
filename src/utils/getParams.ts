import qs from 'qs';

function getParams (searchType: string | null, searchKeyword: string | null) {
    const query = {
        type: searchType,
        keyword: searchKeyword,
    };
  
    return qs.stringify(query, { arrayFormat: 'repeat' });
}

export default getParams;