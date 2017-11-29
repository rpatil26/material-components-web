/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Adapter for MDC Text Field.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Text Field into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCTextFieldLabelAdapter {

  /**
   * Adds a class to the label element. We recommend you add a conditional
   * check here, and in removeClass, for whether or not the label is
   * present so that the JS component could be used with text fields that don't
   * require a label, such as the full-width text field.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the label element.
   * @param {string} className
   */
  removeClass(className) {}
}

export default MDCTextFieldLabelAdapter;
  