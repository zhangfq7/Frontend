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
RUN apk add --update nginx nodejs git nodejs-npm && \
    npm install -g bower gulp && \
    echo '{ "allow_root": true }' > /root/.bowerrc && \
    git config --global url."https://".insteadOf git:// && \
    npm install && \
    bower install

EXPOSE 9000
#test
#ENTRYPOINT ["nginx", "-g", "daemon off;"]
#CMD ["gulp", "serve"]
CMD ["./citicstart.sh"]


