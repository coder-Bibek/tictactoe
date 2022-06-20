install:
	yarn install

install.all: install install.app 

install.app:
	npx lerna exec --scope @tictactoe/app -- make install

run.app:
	npx lerna exec --scope @tictactoe/app -- make run
