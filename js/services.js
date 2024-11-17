/**
 * This function is to call various data APIs.
 * @param {string} url URL of API Web Service Request
 * @param {object} data containing data to be sent via the query string using key:value properties
 * @returns {void} This function does not return anything.
 */
function webServiceRequest(url,data)
{
	// Build URL parameters from data object.
    let params = "";
    // For each key in data object...
    for (let key in data)
    {
        if (data.hasOwnProperty(key))
        {
            if (params.length == 0)
            {
                // First parameter starts with '?'
                params += "?";
            }
            else
            {
                // Subsequent parameter separated by '&'
                params += "&";
            }

            let encodedKey = encodeURIComponent(key);
            let encodedValue = encodeURIComponent(data[key]);

            params += encodedKey + "=" + encodedValue;
         }
    }
    let script = document.createElement('script');
    script.src = url + params;
    document.body.appendChild(script);
}
