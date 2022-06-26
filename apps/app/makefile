build:
	yarn build

install:
	yarn install

run:
	yarn start

docker.start:
	docker-compose up -d

docker.stop:
	@printf "\033[0;32m>>> Stopping local services\033[0m\n"
	docker compose down \
		--rmi local \
		--remove-orphans \
		--volumes
