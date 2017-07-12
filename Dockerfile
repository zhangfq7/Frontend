FROM registry.dataos.io/datafoundry/ocdp-web-base

COPY . /data/mainline/

WORKDIR /data/mainline

# Install nginx & node

RUN bower install

ENV ADAPTER_API_SERVER=localhost SVCAMOUNT_API_SERVER=localhost RELEASE_EDITION='dev'

EXPOSE 9000

#ENTRYPOINT ["nginx", "-g", "daemon off;"]
CMD ["gulp", "serve"]



