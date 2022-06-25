build:
	npx lerna exec --scope @tictactoe/app -- make build

install:
	yarn install

install.all: install install.app 

install.app:
	npx lerna exec --scope @tictactoe/app -- make install

lint:
	yarn lint	

run.app:
	npx lerna exec --scope @tictactoe/app -- make run
