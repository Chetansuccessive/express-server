How a Request gets served
You enter a URL into a web browser
The browser looks up the IP address for the domain name via DNS
The browser sends a HTTP request to the server
The server sends back a HTTP response
The browser begins rendering the HTML
The browser sends requests for additional objects embedded in HTML (images, css, JavaScript) and repeats steps 3-5.
Once the page is loaded, the browser sends further async requests as needed.
That’s really it. Here’s a description in words for this site.

When you type “https://wsvincent.com” into your browser the first thing that happens is a Domain Name Server (DNS) matches “wsvincent.com” to an IP address. Then the browser sends an HTTP request to the server and the server sends back an HTTP response. The browser begins rendering the HTML on the page while also requesting any additional resources such as CSS, JavaScript, images, etc. Each subsequent request completes a request/response cycle and is rendered in turn by the browser. Then once the page is loaded some sites (though not mine) will make further asynchronous requests.

If I were asked to explain further I might start talking about how the server and browser connect via TCP. And we could discuss encryption via https, too.

But fundamentally, it’s only 7 steps. I hope this clears up any confusion for readers.