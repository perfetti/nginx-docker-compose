FROM cypress/included:13.6.1

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm install

# Copy Cypress files
COPY cypress.config.js .
COPY cypress/ ./cypress/

CMD ["cypress", "run"]
