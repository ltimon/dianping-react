/**
 * Created by litong on 2017/6/7.
 */


export function get(url) {
    var result = fetch(url,{
        credentials: 'include',
        header: {
            'Accept': 'application/json,text/plain,*/*'
        }
    })
    return result
}