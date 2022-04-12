let employees = [{ "id": 1, "name": "Celesta", "email": "cestrella0@paginegialle.it", "gender": "Female" },
{ "id": 2, "name": "Yalonda", "email": "ymccarroll1@is.gd", "gender": "Female" },
{ "id": 3, "name": "Nessa", "email": "nbaudou2@constantcontact.com", "gender": "Female" },
{ "id": 4, "name": "Finn", "email": "fvassman3@vimeo.com", "gender": "Male" },
{ "id": 5, "name": "Olav", "email": "olewsam4@google.cn", "gender": "Male" },
{ "id": 6, "name": "Wilmar", "email": "wtumelty5@tripod.com", "gender": "Agender" },
{ "id": 7, "name": "Riane", "email": "rbaversor6@earthlink.net", "gender": "Female" },
{ "id": 8, "name": "Kari", "email": "kdomokos7@wikipedia.org", "gender": "Female" },
{ "id": 9, "name": "Damon", "email": "dcrowson8@latimes.com", "gender": "Male" },
{ "id": 10, "name": "Benn", "email": "bgerding9@google.es", "gender": "Male" },
{ "id": 11, "name": "Delora", "email": "dtatama@ezinearticles.com", "gender": "Female" },
{ "id": 12, "name": "Roland", "email": "rpaskeb@who.int", "gender": "Male" },
{ "id": 13, "name": "Vittorio", "email": "vmcnuttc@utexas.edu", "gender": "Male" },
{ "id": 14, "name": "Eileen", "email": "eszymond@squidoo.com", "gender": "Female" },
{ "id": 15, "name": "Arie", "email": "acharsleye@virginia.edu", "gender": "Male" },
{ "id": 16, "name": "Sam", "email": "scapseyf@edublogs.org", "gender": "Male" },
{ "id": 17, "name": "Norean", "email": "ngriggg@storify.com", "gender": "Female" },
{ "id": 18, "name": "Bren", "email": "bskurmh@123-reg.co.uk", "gender": "Female" },
{ "id": 19, "name": "Archaimbaud", "email": "aunderhilli@google.cn", "gender": "Genderqueer" },
{ "id": 20, "name": "Alexandro", "email": "azavattieroj@myspace.com", "gender": "Bigender" },
{ "id": 21, "name": "Aubry", "email": "ageaneyk@oracle.com", "gender": "Genderfluid" },
{ "id": 22, "name": "Laurette", "email": "lcoalel@state.gov", "gender": "Female" },
{ "id": 23, "name": "Lauree", "email": "liacovaccim@jiathis.com", "gender": "Female" },
{ "id": 24, "name": "Gretta", "email": "gtytcombn@bbb.org", "gender": "Female" },
{ "id": 25, "name": "Shayla", "email": "smckinlayo@yahoo.co.jp", "gender": "Bigender" },
{ "id": 26, "name": "Griff", "email": "gserlep@washington.edu", "gender": "Male" },
{ "id": 27, "name": "Remington", "email": "rblamphinq@cnn.com", "gender": "Male" },
{ "id": 28, "name": "Libbi", "email": "lbuxeyr@webmd.com", "gender": "Female" },
{ "id": 29, "name": "Colman", "email": "cortellss@1688.com", "gender": "Male" },
{ "id": 30, "name": "Joana", "email": "jmollettt@naver.com", "gender": "Female" },
{ "id": 31, "name": "Romy", "email": "rturrillu@eventbrite.com", "gender": "Female" },
{ "id": 32, "name": "Dorie", "email": "dmostinv@amazon.co.jp", "gender": "Male" },
{ "id": 33, "name": "Gustavus", "email": "gortigerw@buzzfeed.com", "gender": "Male" },
{ "id": 34, "name": "Barbara", "email": "bdaniellox@china.com.cn", "gender": "Female" },
{ "id": 35, "name": "Eloisa", "email": "ebowsteady@yolasite.com", "gender": "Female" },
{ "id": 36, "name": "Jaime", "email": "jliftonz@stanford.edu", "gender": "Genderfluid" },
{ "id": 37, "name": "Taddeo", "email": "tinsoll10@webnode.com", "gender": "Male" },
{ "id": 38, "name": "Chas", "email": "ccondell11@t-online.de", "gender": "Male" },
{ "id": 39, "name": "Faye", "email": "finstrell12@washington.edu", "gender": "Female" },
{ "id": 40, "name": "Arnoldo", "email": "aothick13@hc360.com", "gender": "Male" },
{ "id": 41, "name": "Sondra", "email": "sdowling14@amazon.de", "gender": "Bigender" },
{ "id": 42, "name": "Wenda", "email": "weplate15@mtv.com", "gender": "Female" },
{ "id": 43, "name": "Shurlock", "email": "sleggott16@vinaora.com", "gender": "Male" },
{ "id": 44, "name": "Nataline", "email": "nchartres17@cisco.com", "gender": "Female" },
{ "id": 45, "name": "Dotti", "email": "dshapter18@purevolume.com", "gender": "Female" },
{ "id": 46, "name": "Anet", "email": "amuat19@twitter.com", "gender": "Bigender" },
{ "id": 47, "name": "Sonnie", "email": "snorridge1a@dot.gov", "gender": "Male" },
{ "id": 48, "name": "Jessie", "email": "jdignall1b@whitehouse.gov", "gender": "Male" },
{ "id": 49, "name": "Wileen", "email": "wcorless1c@earthlink.net", "gender": "Polygender" },
{ "id": 50, "name": "Maryjane", "email": "mcrossby1d@foxnews.com", "gender": "Female" }]


function displayData() {
    console.log("Test case 123")
    let rows = ""
    employees.map((employee) => {
        rows += `<tr>
                            <td>${employee.id}</td> 
                            <td>${employee.name}</td> 
                            <td>${employee.email}</td> 
                            <td>${employee.gender}</td> 
                        <tr>`
    });
    document.getElementById('tbody_Data').innerHTML = rows

}
