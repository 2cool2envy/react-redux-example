
let getData = () => {
    return new Promise((resolve, reject) => {
        fetch("https://raw.githubusercontent.com/2cool2envy/fkbestOffers/master/data.csv")
            .then(res => res.text())    
            .then(
                (result) => {
                    let lines=result.split("\n");
                    let headers=lines[0].split(",");
                    let allRows = [];
                    for(var i=1;i<lines.length;i++){
                        var obj = {};
                        var currentline=lines[i].split(",");                  
                        for(var j=0;j<headers.length;j++){
                            obj[headers[j]] = currentline[j];
                        }                  
                        allRows.push(obj);
                  
                    }
                    resolve({
                        status: true,
                        headers :headers,
                        jobs : allRows
                    });
                },
                (error) => {
                    console.error("Error :", error);
                    reject({
                        status: false,
                        desc :error
                    })
                }
            )
    });
}


export default getData;