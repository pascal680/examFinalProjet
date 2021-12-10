package com.lacouf.al420565final.controller;

import com.lacouf.al420565final.model.Client;
import com.lacouf.al420565final.model.ClientFactory;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {

  @GetMapping(path = "/clients")
  public ResponseEntity<List<Client>> getAllClients() {
    return new ResponseEntity(ClientFactory.getClients(), HttpStatus.OK);
  }

  @GetMapping(path = "clients/homme")
  public ResponseEntity<List<Client>> getAllClientsHomme() {
    List<Client> hommes = ClientFactory.getClients().stream()
        .filter(client -> client.getGender().equals("M"))
        .collect(Collectors.toList());
    return new ResponseEntity<>(hommes, HttpStatus.OK);
  }

  @GetMapping(path = "clients/ontariens")
  public ResponseEntity<List<Client>> getAllClientsOntarien() {
    List<Client> ontariens = ClientFactory.getClients().stream()
        .filter(client -> client.getProvince().equals("ON"))
        .collect(Collectors.toList());
    return new ResponseEntity<>(ontariens, HttpStatus.OK);
  }


}
