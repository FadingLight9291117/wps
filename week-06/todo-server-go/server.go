package main

import (
	"net/http"
)

type HandleFunc func(w http.ResponseWriter, r *http.Request)

routeMap := &map[string]HandleFunc{
	"/api/list":   listTodo,
	"/api/create": createToDo,
	"/api/remove": removeToDo,
}

func listTodo(w http.ResponseWriter, r *http.Request) {

}

func createToDo(w http.ResponseWriter, r *http.Request) {

}

func removeToDo(w http.ResponseWriter, r *http.Request) {

}

func main() {

}
