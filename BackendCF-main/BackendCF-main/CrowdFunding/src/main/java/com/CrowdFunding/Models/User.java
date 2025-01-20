package com.CrowdFunding.Models;


import jakarta.persistence.*;
import jdk.jfr.Timestamp;
import lombok.Getter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "userName")
    private String userName;

    private String password;

    @CreationTimestamp
    private LocalDateTime localDateTime;

    public long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getPassword() {
        return password;
    }

    public LocalDateTime getLocalDateTime() {
        return localDateTime;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setLocalDateTime(LocalDateTime localDateTime) {
        this.localDateTime = localDateTime;
    }

    public User(long id, String userName, String password, LocalDateTime localDateTime) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.localDateTime = localDateTime;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", localDateTime=" + localDateTime +
                '}';
    }

    public User() {
    }
}
