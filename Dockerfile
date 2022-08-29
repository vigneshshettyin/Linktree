#1. Base Image
FROM node:18-alpine3.15 as build 

#2. Working Dir
WORKDIR /react-app

#3. Bring package.json file
COPY package*.json .

#5. Install all dependencies
RUN yarn install

#6. Copy files from the current working directory of the local system WORKDIR
COPY . .

# Optional - (Enviroment variables)
ENV REACT_APP_IMAGE="https://github.com/vigneshshettyin.png"
ENV REACT_APP_USER_NAME="Vignesh Shetty"
ENV REACT_APP_USER_ID="vigneshshettyin"
ENV REACT_APP_SUB_TITLE="Associate Software Engineer @ Clarivate"
ENV REACT_APP_SOCIAL_LINKS="https://github.com/vigneshshettyin,https://linkedin.com/in/vigneshshettyin,https://twitter.com/vigneshshettyin,https://instagram.com/vigneshshettyin,https://hashnode.com/@vigneshshettyin"
ENV REACT_APP_LINKS="https://go.vigneshcodes.in/meetly,Meetly - Conferencing App+https://go.vigneshcodes.in/certify,Certify - Certification App+https://eurl.tech,EatMyUrl - Free URL Shortener"


#7. Get the optimized build of react app
RUN yarn run build

#8. Base Image
FROM nginx:1.21.6-alpine

#9. Get the ngnix configurations
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

#10. Copy the build folder of the react-app to ngnix HTML directory
COPY --from=build /react-app/build /usr/share/nginx/html