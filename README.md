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

 