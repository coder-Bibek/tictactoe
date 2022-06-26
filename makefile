build:
	npx lerna exec --scope @tictactoe/app -- make build

docker.start:
	npx lerna exec --scope @tictactoe/app -- make docker.start

docker.stop:
	npx lerna exec --scope @tictactoe/app -- make docker.stop

install:
	yarn install

install.all: install install.app 

install.app:
	npx lerna exec --scope @tictactoe/app -- make install

lint:
	yarn lint	

run.app:
	npx lerna exec --scope @tictactoe/app -- make run
