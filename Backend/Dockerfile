FROM python:3.13.7-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["waitress-serve", "--host=0.0.0.0", "--port=8080", "--call", "ProjectPBackend.__init__:create_app"]