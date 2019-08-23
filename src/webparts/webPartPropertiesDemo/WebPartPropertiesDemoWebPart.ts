import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './WebPartPropertiesDemoWebPart.module.scss';
import * as strings from 'WebPartPropertiesDemoWebPartStrings';

export interface IWebPartPropertiesDemoWebPartProps {
  desc: string;
  director1: string;
  director2: string;
  cin: string;
  iec: string;
  panno: string;
  tanno: string;
  gst: string;
}

export default class WebPartPropertiesDemoWebPart extends BaseClientSideWebPart<IWebPartPropertiesDemoWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.webPartPropertiesDemo }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }"><b>Company Details:</b></span>
              <p class="${ styles.subTitle }"><b>Directors:</b></p>
              <p class="${ styles.description }">${escape(this.properties.director1)}</p>
              <p class="${ styles.description }">${escape(this.properties.director2)}</p>
              <p class="${ styles.subTitle }"><b>Registration Details:</b></p>
              <p class="${ styles.description }">${escape(this.properties.cin)}</p>
              <p class="${ styles.description }">${escape(this.properties.iec)}</p>
              <p class="${ styles.subTitle }"><b>Tax Details:</b></p>
              <p class="${ styles.description }">${escape(this.properties.gst)}</p>
              <p class="${ styles.description }">${escape(this.properties.panno)}</p>
              <p class="${ styles.description }">${escape(this.properties.tanno)}</p>              
              <a href="https://aka.ms/spfx" class="${ styles.button }">
                <span class="${ styles.label }">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Company Details"
          },
          groups: [
            {
              groupName: "Director Information",
              groupFields: [                
                PropertyPaneTextField('director1', {
                  label: "Director 1:"
                }),
                PropertyPaneTextField('director2', {
                  label: "Director 2:"
                })
              ]
            },
            {
              groupName: "Registration Information",
              groupFields: [
                PropertyPaneTextField('cin', {
                  label: "Enter CIN No:"
                }),
                PropertyPaneTextField('iec', {
                  label: "Enter IEC No:"
                })
                
              ]
            },
            {
              groupName: "Tax Information",
              groupFields: [
                PropertyPaneTextField('gst', {
                  label: "Enter GST No:"
                }),
                PropertyPaneTextField('panno', {
                  label: "Enter PAN No:"
                }),
                PropertyPaneTextField('tanno', {
                  label: "Enter TAN No:"
                })
                
              ]
            }
          ]
          
        }
      ]
    };
  }
}
