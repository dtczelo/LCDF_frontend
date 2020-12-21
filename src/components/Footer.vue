<template>
    <footer id="footer">
        <section id="contact" class="contact">
            <div class="container">
                <div class="section-title mb-5">
                    <h2><span>Où</span> Nous trouver</h2>
                </div>
            </div>

            <div class="map">
                <iframe
                    style="border:0; width: 100%; height: 350px;"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.3029656878366!2d-0.34286538408007816!3d49.17583738625577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a682423292527%3A0xe0ad6b2cd8fd922a!2s19%20Rue%20du%20Marais%2C%2014000%20Caen!5e0!3m2!1sfr!2sfr!4v1604064630891!5m2!1sfr!2sfr"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>

            <div class="container">
                <div class="section-title mt-5">
                    <h2><span>Contactez</span> Nous</h2>
                    <p>
                        Le chef sera ravis de ...ribus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.
                    </p>
                </div>
            </div>

            <div class="container mt-2">
                <div class="info-wrap">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 info">
                            <i class="fas fa-map-marked-alt"></i>
                            <h4>Adresse:</h4>
                            <p>19 Rue du marais<br />14000, Caen</p>
                        </div>

                        <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                            <i class="far fa-clock"></i>
                            <h4>Heures d'ouverture:</h4>
                            <p>Lundi - Samedi:<br />11:00 - 23:00</p>
                        </div>

                        <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                            <i class="far fa-envelope"></i>
                            <h4>Email:</h4>
                            <p>lacuisinedefrancois@outlook.fr</p>
                        </div>

                        <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                            <i class="fas fa-mobile-alt"></i>
                            <h4>Téléphone:</h4>
                            <p>+33 750 37 19 24</p>
                        </div>
                    </div>
                </div>

                <form role="form" class="email-form">
                    <div class="form-row">
                        <div class="col-md-6 form-group">
                            <input
                                type="text"
                                name="name"
                                class="form-control"
                                id="name"
                                placeholder="Votre nom"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                            />
                            <div class="validate"></div>
                        </div>
                        <div class="col-md-6 form-group">
                            <input
                                type="email"
                                class="form-control"
                                name="email"
                                id="email"
                                placeholder="Votre Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                            />
                            <div class="validate"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Sujet"
                            data-rule="minlen:4"
                            data-msg="Please enter at least 8 chars of subject"
                        />
                        <div class="validate"></div>
                    </div>
                    <div class="form-group">
                        <textarea
                            class="form-control"
                            name="message"
                            rows="5"
                            data-rule="required"
                            data-msg="Please write something for us"
                            placeholder="Message"
                        ></textarea>
                        <div class="validate"></div>
                    </div>
                    <div class="mb-3">
                        <div class="loading">Chargement</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Votre message a été envoyé. Merci !</div>
                    </div>
                    <div class="text-center"><button type="submit" @click.prevent="postForm(data)">Envoyer</button></div>
                </form>
            </div>
        </section>

        <section class="container">
            <h3>La cuisine de François</h3>
            <p>La gourmandise est le péché des bonnes âmes...</p>
            <div class="social-links">
                <a href="https://www.facebook.com/francois.lacuisinedefrancois" class="facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
            </div>
        </section>
    </footer>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        postForm(data) {
            console.log(data);
        },
    },
};
</script>

<style lang="scss">
@import "../assets/styles/scss/variables";

/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact .info-wrap {
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    padding: 30px;
}

.contact .info {
    background: #fff;
}

.contact .info i {
    font-size: 20px;
    color: $third-color;
    float: left;
    width: 44px;
    height: 44px;
    background: #fff6e8;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
}

.contact .info h4 {
    padding: 0 0 0 60px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #433f39;
    font-family: $font-text;
}

.contact .info p {
    padding: 0 0 0 60px;
    margin-bottom: 0;
    font-size: 14px;
    color: #7a7368;
}

.contact .info:hover i {
    background: $third-color;
    color: #fff;
}

.contact .email-form {
    width: 100%;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
    padding: 30px;
    background: #fff;
}

.contact .email-form .form-group {
    padding-bottom: 8px;
}

.contact .email-form .validate {
    display: none;
    color: red;
    margin: 0 0 15px 0;
    font-weight: 400;
    font-size: 13px;
}

.contact .email-form .error-message {
    display: none;
    color: #fff;
    background: #ed3c0d;
    text-align: center;
    padding: 15px;
    font-weight: 600;
}

.contact .email-form .sent-message {
    display: none;
    color: #fff;
    background: #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
}

.contact .email-form .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
}

.contact .email-form .loading:before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #18d26e;
    border-top-color: #eee;
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
}

.contact .email-form input,
.contact .email-form textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
}

.contact .email-form input {
    height: 44px;
}

.contact .email-form textarea {
    padding: 10px 12px;
}

.contact .email-form button[type="submit"] {
    background: $third-color;
    border: 0;
    padding: 10px 24px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
}

.contact .email-form button[type="submit"]:hover {
    background: $fourth-color;
}

.contact h2 span {
    color: $third-color;
}

@-webkit-keyframes animate-loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes animate-loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
    background: #fff;
    color: $second-color;
    font-size: 14px;
    text-align: center;
    padding: 30px 0px;
}

#footer .container {
    padding-top: 40px;
}

#footer h3 {
    font-size: 36px;
    font-weight: 700;
    color: $third-color;
    position: relative;
    padding: 0;
    margin: 0 0 15px 0;
}

#footer p {
    font-size: 15;
    font-style: italic;
    padding: 0;
    margin: 0 0 0 0;
}

#footer .social-links {
    margin: 40px 0 30px 0;
}

#footer .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #46423b;
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
}

#footer .social-links a:hover {
    background: $third-color;
}

#footer .copyright {
    margin: 0 0 5px 0;
}

#footer .credits {
    font-size: 13px;
}
</style>
