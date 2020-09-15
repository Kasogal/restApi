FROM openjdk:8-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
COPY "${JAR_FILE}" app.jar
ENTRYPOINT ["java","-jar","/app.jar"]

#local
#./gradlew build
#docker build --build-arg JAR_FILE=build/libs/*.jar -t br/com/clinica .
#sudo docker run -p 8080:8080 br/com/clinica