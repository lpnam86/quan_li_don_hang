function createTable() {

    const client = new pg.Client({
        user: "postgres",
        host: "localhost",
        database: "Order management",
        password: "Luyennam123!",
        port: "5432",
    })

    client.query(
        'CREATE TABLE session(sessionguild UUID NOT NULL, created text NOT NUll, sessionlife integer NOT NULL)',
        (err, res) => {
            console.log(err, res)
            client.end()
        }
    )

}