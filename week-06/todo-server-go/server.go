package main

import (
	"fmt"
	"net/http"
)



type HandleFunc func(w http.ResponseWriter, r *http.Request)

var apiMap = &map[string]HandleFunc{
	"/api/list":   nil,
	"/api/create": nil,
	"/api/remove": nil,
}

func listTodo() {

}

func main() {

}
