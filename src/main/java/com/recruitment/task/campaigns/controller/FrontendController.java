package com.recruitment.task.campaigns.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontendController {
    @RequestMapping(value = {"/"})
    public String indexPage() {
        return "index.html";
    }
}
