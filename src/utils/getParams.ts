import qs from 'qs';

function getParams (searchType: string | null, searchKeyword: string | null) {
    const query = {
        type: searchType,
        keyword: searchKeyword,
    };
  
    return qs.stringify(query, { arrayFormat: 'repeat' });
}

function getGenerateParams (workbookTitle: string, workbookSubject: string, workbookDescription: string) {
    const query = {
        title: workbookTitle,
        subject: workbookSubject,
        description: workbookDescription,
    };

    return qs.stringify(query, { arrayFormat: 'repeat' });
}

export { getParams, getGenerateParams };