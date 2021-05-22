# Customer Contact Viewer
The main idea of this simple task to read customer numbers with simple UI

## How to Run

- Install [SQLite3](https://linuxhint.com/install_sqlite_browser_ubuntu_1804/)
- Install [NodeJs](https://nodejs.org/en/download/package-manager/)
- Install [Maven](https://linuxize.com/post/how-to-install-apache-maven-on-ubuntu-18-04/)


#### Initialize DB
```bash
sqlite3 sample.db
.read {absolute-path}/backend/init.sql
```

#### Start Spring
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

#### Start Front
```bash
cd frontend
ng build
ng serve --open
```

#### Run Spring Tests
```bash
mvn test
```

#### Future work
Start using docker compose
```bash
docker-compose up
```



###Backend Structure:

![alt text](https://user-images.githubusercontent.com/57498054/119237401-dfacae80-bb3c-11eb-8735-9037a88a13de.png "Backend Structure")

 
###Frontend Structure:

![alt text](https://user-images.githubusercontent.com/57498054/119237398-dcb1be00-bb3c-11eb-8159-9b08749f95a9.png "Frontend Structure")

 
