import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/Components/BaseComponent/app.component';
import { config } from './app/Config/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
