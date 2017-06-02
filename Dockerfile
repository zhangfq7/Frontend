FROM alpine:latest

# Copy code
COPY . /data/mainline/

WORKDIR /data/mainline

# Install nginx & node
# Install Bower
# Install node & bower depends
# Set bower root allow

#sed -i s#dl-cdn.alpinelinux.org#mirrors.aliyun.com/alpine#g /etc/apk/repositories && \
#ed -i 's/http\:\/\/dl-cdn.alpinelinux.org/https\:\/\/alpine.global.ssl.fastly.net/g' /etc/apk/repositories && \
RUN apk update 
RUN apk add  nginx nodejs git node-npm && \
    npm install -g bower gulp && \
    echo '{ "allow_root": true }' > /root/.bowerrc && \
    git config --global url."https://".insteadOf git:// && \
    npm install && \
    bower install

EXPOSE 80

#ENTRYPOINT ["nginx", "-g", "daemon off;"]
CMD ["gulp serve"]


