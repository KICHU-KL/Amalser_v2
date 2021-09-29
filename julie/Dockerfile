FROM fusuf/whatsasena:latest

RUN git clone https://github.com/KICHU-KL/Amalser_v2/blob/master/julie/DockerfileWhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/farhan-dqz/media

CMD ["node", "bot.js"]
