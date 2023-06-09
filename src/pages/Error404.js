import {Grid, Header, Image, Button} from "semantic-ui-react";
import  ImageInsider  from "../img/page-404.jpeg";
import "../index.css"

export default function Error404() {
    return (
        <div className="container-page-404" id="error">
            <Grid>
                <image src={ImageInsider} alt="Image Insider" />
                <Grid.Column>
                    <header className="error-container" color="red" as="h1">
                        Error404 no se encontró la página
                    </header>
                    <div className="container-insider-content-button">
                        <Button href="./inicio" target="blank">
                            Volver al inicio
                        </Button>
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    );
}