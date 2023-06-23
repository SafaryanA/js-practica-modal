const fruits = [
    {
        id : 1,
        title : 'Apple',
        price : 20,
        img : 'https://freshfruitsandveges.co.nz/wp-content/uploads/2020/04/Apple-Royal-Gala-500gm-700x700.jpg'
    },
    {
        id : 2,
        title : 'Orange',
        price : 30,
        img : 'https://static.libertyprim.com/files/familles/orange-large.jpg?1569271818'
    },
    {
        id : 3,
        title : 'Mango',
        price : 40,
        img : 'https://static.libertyprim.com/files/familles/mangue-large.jpg?1569271798'
    }

]


const modal = $.modal ({
    title : 'My Modal',
    closable : true,
    content : `
<p>Lorem ipsum dolor sit.</p>
<p>Lorem ipsum dolor sit.</p>
`,
    width : '400px',
    footerButtons : [
        {
            text : 'OK', type : 'primary', handler () {
                console.log ('Primary btn clicked')
            }
        },
        {
            text : 'Cancel', type : 'danger', handler () {
                console.log ('Danger btn clicked')
                modal.close()
            }
        },
    ]

})
